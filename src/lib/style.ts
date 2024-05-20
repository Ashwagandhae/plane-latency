export type Layer = 0 | 1 | 2;

export function layerClass(layer: Layer): string {
	return 'layer-' + layer.toString();
}

export type Palette = 'plain' | 'green' | 'orange' | 'blue';

export function paletteClass(palette: Palette): string {
	return 'palette-' + palette;
}
