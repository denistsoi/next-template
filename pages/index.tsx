import Head from "next/head"
import Image from "next/image"

import { Header } from "Components/Header"
import { Footer } from "Components/Footer"
import { Headline } from "Components/Headline"

import { Gradients } from "Components/Colors"

import { Card, Theme } from "Components/Card"
import { Section, HeroSection } from "Components/Section"

import { StyleType, TextType } from "Components/Utilities"

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Template</title>
      </Head>

      <Header>
        <h1 className="text-lg">Template landing</h1>
      </Header>

      <main className="flex flex-col">
        <HeroSection
          backgroundImage={{
            src: "https://source.unsplash.com/800x800",
            layout: "fill",
            className: "object-center object-cover pointer-events-none",
          }}
        >
          <div className="flex gap-4 max-w-screen-xl mx-auto">
            <div className="relative p-4 bg-gray-300 rounded w-full md:w-2/3 lg:w-1/2">
              <h1 className="text-2xl">Made with Next.js and Tailwindcss</h1>
              <p className="mt-2 border-right:">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae corrupti ipsam esse quo enim culpa veniam inventore
                beatae voluptate saepe, est totam deleniti assumenda molestiae
                voluptatibus dolorem, voluptatum modi. Beatae.
              </p>
            </div>

            <div className="hidden md:block md:w-1/3 lg:w-1/2 ">
              <div className="relative p-4 bg-gradient-to-r from-green-200 to-blue-500 h-full"></div>
            </div>
          </div>
        </HeroSection>

        <Section type={StyleType.Dark}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-3 grid-rows-1 gap-4 w-full">
            <div className="bg-gradient-to-r rounded from-blue-200 to-gray-700 h-60 w-full"></div>
            <div className="bg-gradient-to-r rounded from-blue-700 to-gray-400 h-60 w-full"></div>
            <div className="bg-gradient-to-r rounded from-red-200 to-purple-400 h-60 w-full"></div>
          </div>
        </Section>

        <Section type={StyleType.Light}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-4 grid-rows-1 gap-4 w-full">
            {/* card */}
            <Card
              backgroundColor={Gradients.LightGreen}
              title="Hello World"
              subtitle="I am a subtitle"
            />

            {/* card */}
            <Card
              backgroundColor={Gradients.LightPurple}
              title="Hello Title Card"
              subtitle="Hi I am a subtitle"
            />
          </div>
        </Section>

        <Section type={StyleType.Dark} wrap={true}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-3 max-w-screen-xl mx-auto">
            <div className="flex p-4 bg-gray-700 rounded">
              <p className={TextType.white}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit praesentium repellat neque debitis tempora amet
                officiis, similique aspernatur ut sapiente ratione soluta
                adipisci, odit minus sed sequi ea quasi dolore.
              </p>
            </div>
            <div className="flex p-4 bg-gray-700 rounded">
              <p className={TextType.white}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ipsum saepe magnam reiciendis nemo impedit soluta facilis!
                Numquam doloribus maiores, hic laboriosam at, odio, nihil
                dignissimos unde provident molestias a.
              </p>
            </div>
            <div className="flex p-4 bg-gray-700 rounded">
              <p className={TextType.white}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit praesentium repellat neque debitis tempora amet
                officiis, similique aspernatur ut sapiente ratione soluta
                adipisci, odit minus sed sequi ea quasi dolore.
              </p>
            </div>
            <div className="flex p-4 bg-gray-700 rounded">
              <p className={TextType.white}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ipsum saepe magnam reiciendis nemo impedit soluta facilis!
                Numquam doloribus maiores, hic laboriosam at, odio, nihil
                dignissimos unde provident molestias a.
              </p>
            </div>
            <div className="flex p-4 bg-gray-700 rounded">
              <p className={TextType.white}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ipsum saepe magnam reiciendis nemo impedit soluta facilis!
                Numquam doloribus maiores, hic laboriosam at, odio, nihil
                dignissimos unde provident molestias a.
              </p>
            </div>
            <div className="flex p-4 bg-gray-700 rounded">
              <p className={TextType.white}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ipsum saepe magnam reiciendis nemo impedit soluta facilis!
                Numquam doloribus maiores, hic laboriosam at, odio, nihil
                dignissimos unde provident molestias a.
              </p>
            </div>
          </div>
        </Section>

        <Section type={StyleType.Light}>
          <div className="flex flex-col p-4 gap-4 w-full bg-gray-700 rounded mx-auto max-w-screen-xl">
            <p className={TextType.white}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              praesentium repellat neque debitis tempora amet officiis,
              similique aspernatur ut sapiente ratione soluta adipisci, odit
              minus sed sequi ea quasi dolore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Harum sit dicta animi vero maxime
              possimus minima? Et nemo assumenda consequuntur ut fuga quae
              incidunt dolore facere sint! Blanditiis, quae quidem.
            </p>
            <p className={TextType.white}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit
              dicta animi vero maxime possimus minima? Et nemo assumenda
              consequuntur ut fuga quae incidunt dolore facere sint! Blanditiis,
              quae quidem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Harum sit dicta animi vero maxime possimus minima? Et nemo
              assumenda consequuntur ut fuga quae incidunt dolore facere sint!
              Blanditiis, quae quidem.
            </p>
          </div>
        </Section>

        <Section>
          <div className=""></div>
        </Section>
      </main>

      <Footer text="Made by @denistsoi" />
    </div>
  )
}
