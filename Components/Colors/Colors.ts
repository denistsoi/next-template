export enum BaseColors {
  Green = "green",
  Blue = "blue",
  Yellow = "yellow",
  Purple = "purple",
  Gray = "gray",
  Red = "red",
  Indigo = "indigo",
  Pink = "pink",
}

export enum DarkColors {
  Green = "green-900",
  Blue = "blue-900",
  Yellow = "yellow-900",
  Purple = "purple-900",
  Gray = "gray-900",
  Red = "red-900",
  Indigo = "indigo-900",
  Pink = "pink-900",
}

export enum PrimaryColors {
  Green = "green-500",
  Blue = "blue-500",
  Yellow = "yellow-500",
  Purple = "purple-500",
  Gray = "gray-500",
  Red = "red-500",
  Indigo = "indigo-500",
  Pink = "pink-500",
}

export enum LightColors {
  Green = "green-200",
  Blue = "blue-200",
  Yellow = "yellow-200",
  Purple = "purple-200",
  Gray = "gray-200",
  Red = "red-200",
  Indigo = "indigo-200",
  Pink = "pink-200",
}

export enum OpaqueColors {
  Green = "green-50",
  Blue = "blue-50",
  Yellow = "yellow-50",
  Purple = "purple-50",
  Gray = "gray-50",
  Red = "red-50",
  Indigo = "indigo-50",
  Pink = "pink-50",
}

export const Colors = {
  Dark: { ...DarkColors },
  Primary: { ...PrimaryColors },
  Light: { ...LightColors },
  Opaque: { ...OpaqueColors },
}

export type ColorType = keyof typeof Colors

