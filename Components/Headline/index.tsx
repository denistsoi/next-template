interface Props {
  text?: string
}

export const Headline: React.FC<Props> = ({ text }) => {
  return (
    <div className="h-20 bg-gray-700 text-white p-4 rounded-md">{text}</div>
  )
}
