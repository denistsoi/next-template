import { BackgroundColors } from "../Colors"

export const Footer = ({ text }) => {
  return (
    <footer className={`text-white p-4 ${BackgroundColors.PrimaryBlue}`}>
      <div className="flex max-w-screen-xl mx-auto">{text}</div>
    </footer>
  )
}
