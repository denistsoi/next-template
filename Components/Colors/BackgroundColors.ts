import { Colors, BaseColors } from "./Colors"

const generateBackgroundColors = (colors) => {
  return Object.fromEntries(Object.entries(colors).map(([key, value]) => {
    return [key, `bg-${value}`]
  }))
}

export const BackgroundColors = {
  Dark: generateBackgroundColors(Colors.Dark),
  Primary: generateBackgroundColors(Colors.Primary),
  Light: generateBackgroundColors(Colors.Light),
  Opaque: generateBackgroundColors(Colors.Opaque),
}

export type BackgroundColorType = keyof typeof Colors.Dark | keyof typeof Colors.Primary | keyof typeof Colors.Light | keyof typeof Colors.Opaque

export const getHeaderBackgroundColor = (backgroundColor) => {
  if (backgroundColor.includes('gradient')) {

    const color = Object.entries(BaseColors).find(([_k, _color]) => {
      return backgroundColor.includes(`from-${_color
        }`)
    })

    return BackgroundColors.Primary[color[0]]
  }
}