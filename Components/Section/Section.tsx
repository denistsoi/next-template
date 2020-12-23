import { generateBackground, StyleType } from "Components/Utilities"

interface PropTypes {
  type?: StyleType
  wrap?: boolean
  padding?: string
}

export const Section: React.FC<PropTypes> = ({
  children,
  type,
  wrap = false,
}) => {
  const backgroundColor = generateBackground(type)
  return (
    <section className={`px-4 py-8 flex w-full mx-auto ${backgroundColor}`}>
      {children}
    </section>
  )
}
