<script setup lang="ts">
import {
  ScalarCard,
  ScalarCardHeader,
  ScalarCardSection,
  ScalarCodeBlock,
  ScalarErrorBoundary,
} from '@scalar/components'
import { getExampleFromSchema } from '@scalar/oas-utils/spec-getters'
import type { ApiReferenceConfiguration } from '@scalar/types'
import type { SchemaObject } from '@scalar/workspace-store/schemas/v3.1/strict/openapi-document'
import { computed, useId } from 'vue'

import {
  CompactSection,
  Section,
  SectionColumn,
  SectionColumns,
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionHeaderTag,
} from '@/components/Section'
import ShowMoreButton from '@/components/ShowMoreButton.vue'
import { useSidebar } from '@/features/sidebar'
import { useNavState } from '@/hooks/useNavState'

import { Schema, SchemaHeading } from '../Schema'

const { config, schemas = [] } = defineProps<{
  config: ApiReferenceConfiguration
  schemas: { name: string; schema: SchemaObject }[]
}>()

const headerId = useId()

const MAX_MODELS_INITIALLY_SHOWN = 10

const { collapsedSidebarItems } = useSidebar()
const { getModelId } = useNavState()

const showAllModels = computed(
  () =>
    config.expandAllModelSections ||
    schemas.length <= MAX_MODELS_INITIALLY_SHOWN ||
    collapsedSidebarItems[getModelId()],
)

const models = computed(() => {
  if (showAllModels.value) {
    return schemas
  }

  // return only first MAX_MODELS_INITIALLY_SHOWN models
  return schemas.slice(0, MAX_MODELS_INITIALLY_SHOWN)
})
</script>
<template>
  <SectionContainer
    v-if="schemas"
    id="models">
    <Section :aria-labelledby="headerId">
      <SectionHeader>
        <SectionHeaderTag
          :id="headerId"
          :level="2">
          Models
        </SectionHeaderTag>
      </SectionHeader>
      <div
        class="models-list"
        :class="{ 'models-list-truncated': !showAllModels }">
        <CompactSection
          v-for="{ name, schema } in models"
          :id="getModelId({ name })"
          :key="name"
          class="models-list-item"
          :defaultOpen="config.expandAllModelSections"
          :label="name">
          <template #heading>
            <SectionHeaderTag :level="3">
              <SchemaHeading
                :name="schema.title ?? name"
                :value="schema" />
            </SectionHeaderTag>
          </template>
          <ScalarErrorBoundary>
            <SectionContent>
              <SectionColumns>
                <SectionColumn>
                  <Schema
                    :hideHeading="true"
                    :hideModelNames="true"
                    :level="1"
                    noncollapsible
                    :schema />
                </SectionColumn>
                <SectionColumn>
                  <ScalarCard class="scalar-card-sticky">
                    <ScalarCardHeader>
                      {{ schema.title ?? name }}
                    </ScalarCardHeader>
                    <ScalarCardSection
                      class="request-editor-section custom-scroll p-0">
                      <ScalarCodeBlock
                        class="bg-b-2 -outline-offset-2"
                        :content="
                          getExampleFromSchema(schema, {
                            emptyString: 'string',
                            mode: 'read',
                          })
                        "
                        lang="json" />
                    </ScalarCardSection>
                  </ScalarCard>
                </SectionColumn>
              </SectionColumns>
            </SectionContent>
          </ScalarErrorBoundary>
        </CompactSection>
      </div>
      <ShowMoreButton
        v-if="!showAllModels"
        :id="getModelId()"
        class="show-more-models" />
    </Section>
  </SectionContainer>
</template>
<style scoped>
.models-list {
  display: contents;
}
.models-list-truncated .models-list-item:last-child {
  border-bottom: var(--scalar-border-width) solid var(--scalar-border-color);
}
.show-more-models {
  margin-top: 32px;
  top: 0px;
}
/* increase z-index for hover of examples */
.models-list-item:hover {
  z-index: 10;
}
</style>
