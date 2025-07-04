import type { OpenAPIV3_1 } from '@scalar/openapi-types'

import type { TagsMap, TraverseSpecOptions, TraversedEntry } from '@/features/traverse-schema/types'
import { traverseDescription } from './traverse-description'
import { traversePaths } from './traverse-paths'
import { traverseSchemas } from './traverse-schemas'
import { traverseTags } from './traverse-tags'
import { traverseWebhooks } from './traverse-webhooks'

/**
 * Travers the OpenAPI Document and ensure we only do it once
 *
 * We are generating the following:
 * - the sidebar
 * - the search index (todo)
 *
 * Currently its called by createSidebar, but we can move this into the de-reference process as a plugin for even more gains
 */
export const traverseDocument = (
  document: OpenAPIV3_1.Document,
  { config, getHeadingId, getOperationId, getWebhookId, getModelId, getTagId }: TraverseSpecOptions,
) => {
  /** Map it ID to title for the mobile header */
  const titles = new Map<string, string>()

  /** Map of tags and their entries */
  const tagsMap: TagsMap = new Map(
    document.tags?.map((tag: OpenAPIV3_1.TagObject) => [tag.name ?? 'Untitled Tag', { tag, entries: [] }]) ?? [],
  )

  const entries: TraversedEntry[] = []

  // Add models if they are not hidden
  if (!config.value.hideModels && document.components?.schemas) {
    const untaggedModels = traverseSchemas(document, tagsMap, titles, getModelId)

    tagsMap.set('models', {
      tag: {
        id: getModelId(),
        title: 'Models',
        name: 'Models',
        children: [],
      },
      entries: untaggedModels,
    })
  }

  traversePaths(document, tagsMap, titles, getOperationId)

  entries.push(...traverseDescription(document.info?.description, titles, getHeadingId))

  const untaggedWebhooks = traverseWebhooks(document, tagsMap, titles, getWebhookId)
  const tagsEntries = traverseTags(document, tagsMap, titles, {
    getTagId,
    tagsSorter: config.value.tagsSorter,
    operationsSorter: config.value.operationsSorter,
  })

  const modelTagUsed = tagsEntries
    .flatMap((v) => ('tag' in v ? (Array.isArray(v.tag?.tags) ? v.tag?.tags : []) : []))
    .includes('models')

  // Add tagged operations, webhooks and tagGroups
  entries.push(...tagsEntries)

  // Add untagged webhooks
  if (untaggedWebhooks.length) {
    entries.push({
      id: getWebhookId(),
      isWebhooks: true,
      title: 'Webhooks',
      children: untaggedWebhooks,
    })
  }

  if (!modelTagUsed && tagsMap.has('models')) {
    entries.push({
      id: getModelId(),
      title: 'Models',
      children: tagsMap.get('models')!.entries,
    })
  }

  return { entries, titles }
}
