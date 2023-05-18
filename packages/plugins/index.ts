import { QuartzTransformerPlugin, StaticResources } from './types'

export function getStaticResourcesFromPlugins(plugins: QuartzTransformerPlugin[]) {
  const staticResources: StaticResources = {
    css: [],
    js: [],
  }

  for (const plugin of plugins) {
    const res = plugin.externalResources
    if (res?.js) {
      staticResources.js = staticResources.js.concat(res.js)
    }
    if (res?.css) {
      staticResources.css = staticResources.css.concat(res.css)
    }
  }

  return staticResources
}

export { QuartzTransformerPlugin, QuartzFilterPlugin, QuartzEmitterPlugin, ProcessedContent, StaticResources } from './types'
export * from './transformers'
export * from './filters'
// export * from './emitters'

declare module 'vfile' {
  // inserted in processors.ts
  interface DataMap {
    slug: string
    filePath: string
  }
}

