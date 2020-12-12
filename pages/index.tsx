import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Template</title>
      </Head>
      <header className="bg-blue-500 text-white p-2">
        <div>Template landing </div>
      </header>
      <main className="flex p-2">
        <div className="h-20">Made with Next.js and Tailwindcss</div>
      </main>
      <footer className="bg-blue-500 text-white p-2">Made by @denistsoi</footer>
    </div>
  )
}
