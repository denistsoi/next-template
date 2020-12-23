export const Header = ({ children }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex max-w-screen-xl mx-auto">{children}</div>
    </header>
  )
}
