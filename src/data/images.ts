/**
 * Imagery is served from Unsplash's CDN. `srcSet` keeps the payload small on
 * phones and crisp on large editorial layouts.
 */
export const unsplash = (id: string, width = 1200, quality = 78) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`

export const srcSet = (
  id: string,
  widths: number[] = [480, 768, 1024, 1440, 1920],
) => widths.map((w) => `${unsplash(id, w)} ${w}w`).join(', ')

/** Every photograph used across the storefront. */
export const PHOTO = {
  hero: 'photo-1618221195710-dd6b41faaea6',
  heroFloat: 'photo-1612196808214-b8e1d6145a8c',
  heroOrb: 'photo-1572853566597-b83cde546912',

  editorial: 'photo-1615529182904-14819c35db37',
  editorialFloat: 'photo-1572853566597-b83cde546912',

  moodCalm: 'photo-1616137466211-f939a420be84',
  moodBold: 'photo-1618220179428-22790b461013',
  moodArtistic: 'photo-1484101403633-562f891dc89a',
  moodNatural: 'photo-1502672260266-1c1ef2d93688',

  collectionSculptural: 'photo-1567538096630-e0c55bd6374c',
  collectionSoft: 'photo-1616486029423-aaa4789e8c9a',
  collectionRituals: 'photo-1602874801007-bd458bb1b8b6',
  collectionGolden: 'photo-1526057565006-20beab8dd2ed',
  collectionOrganic: 'photo-1565193566173-7a0ee3dbe261',

  lookbook: 'photo-1600607687939-ce8a6c25118c',
  story: 'photo-1493106641515-6b5631de4bb9',
  storyFloat: 'photo-1602143407151-7111542de6e8',

  social1: 'photo-1631679706909-1844bbd07221',
  social2: 'photo-1616137466211-f939a420be84',
  social3: 'photo-1578500494198-246f612d3b3d',
  social4: 'photo-1519710164239-da123dc03ef4',
  social5: 'photo-1631049307264-da0ec9d70304',
  social6: 'photo-1618220048045-10a6dbdf83e0',
  social7: 'photo-1484101403633-562f891dc89a',
  social8: 'photo-1517705008128-361805f42e86',

  shopBanner: 'photo-1600566753086-00f18fb6b3ea',
  inspirationBanner: 'photo-1554995207-c18c203602cb',
  aboutBanner: 'photo-1493809842364-78817add7ffb',
} as const
