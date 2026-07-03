import NextImage, { type ImageProps } from 'next/image';

/**
 * Thin wrapper over next/image applying a site-wide default `quality`.
 *
 * AVIF/WebP at q70 is visually indistinguishable from the q75 default on our
 * photography but ~15–20% lighter. Callers can still pass an explicit `quality`
 * (e.g. lower for full-bleed heroes behind gradients) which overrides this.
 */
const DEFAULT_QUALITY = 70;

export default function Img(props: ImageProps) {
  return <NextImage quality={DEFAULT_QUALITY} {...props} />;
}
