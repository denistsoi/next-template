export enum TextType {
  white = "text-white",
}

export enum StyleType {
  Dark = "dark",
  Light = "light",
}

// move this out
export const generateBackground = (type) => {
  if (type === StyleType.Dark) {
    return "bg-black"
  } else if (type === StyleType.Light) {
    return "bg-white"
  }

  return "bg-white"
}