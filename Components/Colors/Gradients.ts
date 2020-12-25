import { Colors } from './Colors'

export const Gradients = {
  LightGreen: `bg-gradient-to-r from-${Colors.Light.Green} to-${Colors.Opaque.Yellow}`,
  LightBlue: `bg-gradient-to-r from-${Colors.Light.Blue} to-${Colors.Opaque.Yellow}`,
  LightYellow: `bg-gradient-to-r from-${Colors.Light.Yellow} to-${Colors.Opaque.Yellow}`,
  LightPurple: `bg-gradient-to-r from-${Colors.Light.Purple} to-${Colors.Opaque.Yellow}`,
  LightGray: `bg-gradient-to-r from-${Colors.Light.Gray} to-${Colors.Opaque.Yellow}`,
}

export type GradientType = keyof typeof Gradients