import {
  getHeaderBackgroundColor,
  BackgroundColorType,
  GradientType,
} from "Components/Colors"
interface Props {
  children?: React.ReactNode
  title?: string
  subtitle?: string
  backgroundColor?: GradientType | BackgroundColorType
}

export const Card = ({
  children,
  title,
  subtitle,
  backgroundColor,
}: Props): JSX.Element => {
  const HeaderBackgroundColor = getHeaderBackgroundColor(backgroundColor)

  return (
    <div className="h-60 w-full">
      <div
        className={`${backgroundColor} rounded-2xl h-full shadow-xl overflow-hidden`}
      >
        {children && children}

        {!children && (
          <>
            <div
              className={`h-20 rounded-t-2xl flex items-center justify-center ${HeaderBackgroundColor}`}
            >
              <div className={`flex flex-col text-white text-center`}>
                <h3 className="text-2xl leading-4">{title}</h3>
                <sub className="text-sm">{subtitle}</sub>
              </div>
            </div>
            <div className="overflow-auto p-2 h-full">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                odit et illum cupiditate vero natus animi laudantium
                voluptatibus molestiae aliquam numquam distinctio, facilis totam
                qui sequi iure repudiandae neque illo!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
