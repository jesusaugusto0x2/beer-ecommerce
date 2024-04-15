export const DEFAULT_SMALL_IMAGE_WIDTH = 116;
export const DEFAULT_LARGE_IMAGE_WIDTH = 240;

export const IMAGE_WIDTH_MAP: {
  [key: string]: { small: number; large: number };
} = {
  "modelo-especial": {
    small: 85,
    large: 135,
  },
  "miller-lite": {
    small: 75,
    large: 155,
  },
  "corona-premier": {
    small: 40,
    large: 80,
  },
  // "lagunitas-ipa": {
  //   small: 30,
  //   large: 120,
  // },
};
