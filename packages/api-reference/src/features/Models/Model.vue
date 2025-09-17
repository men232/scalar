<script setup lang="ts">
import {
  ScalarCard,
  ScalarCardHeader,
  ScalarCardSection,
  ScalarCodeBlock,
  ScalarMarkdown,
} from '@scalar/components'
import { getExampleFromSchema } from '@scalar/oas-utils/spec-getters'
import { computed, useId } from 'vue'

import { Anchor } from '@/components/Anchor'
import { Schema } from '@/components/Content/Schema'
import {
  Section,
  SectionColumn,
  SectionColumns,
  SectionContent,
  SectionHeader,
  SectionHeaderTag,
} from '@/components/Section'
import type { TraversedSchema } from '@/features/traverse-schema/types'

const { entry } = defineProps<{
  entry: TraversedSchema
}>()

const labelId = useId()
const title = computed(() => entry.schema.title || entry.name)
</script>
<template>
  <Section
    :id="entry.id"
    :aria-labelledby="labelId"
    :label="title"
    tabindex="-1">
    <SectionContent>
      <SectionHeader>
        <Anchor :id="entry.id ?? ''">
          <SectionHeaderTag
            :id="labelId"
            :level="3">
            {{ title }}
          </SectionHeaderTag>
        </Anchor>
      </SectionHeader>
      <SectionColumns>
        <SectionColumn>
          <ScalarMarkdown
            :anchorPrefix="entry.id"
            transformType="heading"
            :value="entry.schema.description"
            withAnchors
            withImages />

          <Schema
            noncollapsible
            :hideHeading="true"
            :schema="entry.schema" />
        </SectionColumn>
        <SectionColumn>
          <ScalarCard class="scalar-card-sticky">
            <ScalarCardHeader>
              {{ title }}
            </ScalarCardHeader>
            <ScalarCardSection class="request-editor-section custom-scroll p-0">
              <ScalarCodeBlock
                class="bg-b-2 -outline-offset-2"
                :content="
                  getExampleFromSchema(entry.schema, {
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
  </Section>
</template>
