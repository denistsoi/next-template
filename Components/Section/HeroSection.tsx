import Image from "next/image"

interface HeroProps {
  backgroundImage?: any
}
export const HeroSection: React.FC<HeroProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div className="p-4 relative">
      {/* {backgroundImage && <Image {...backgroundImage} />} */}
      {children}
    </div>
  )
}
