

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D4gxAkpb.js","_app/immutable/chunks/scheduler.Blb8VqW_.js","_app/immutable/chunks/index.DxqKmJX9.js"];
export const stylesheets = [];
export const fonts = [];
