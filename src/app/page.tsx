import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-fixed font-sans grid grid-rows-[20px_1fr_20px] p-8 gap-16 sm:p-20">
      <div className="p-[3%] row-start-2 bg-white bg-scroll ">
        <main className="flex flex-col gap-[22px]">
          <Image
            className="dark:invert rounded-full mx-auto"
            src="/portrait.jpg"
            alt="pile of screens showing eyes"
            width={180}
            height={38}
            priority
          />
          <a className="font-[playfairDisplay] text-5xl font-bold text-center mx-auto">
            Sadie Manicom
          </a>

          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-[playfairDisplay] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              See My Projects
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-[playfairDisplay] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              See My Art
            </a>
          </div>
          <div className="flex">
            <a className="font-[playfairDisplay] text-xl text-center mx-auto">
            Hi! I'm Sadie and this is setup to be my portfolio website. Here I'm going to be showcasing the projects and tools that I work on.
            My personal goals are to combine my tech development skills with creativity and artistic touches. I studied Computer Science at Arizona State University and I also have a passion for practicing art and music on my own, so I am working to utilize my skillset to create products and tools that can be functional and efficient as well as charming and original.
            My top priority at this time is to complete the tech portfolio page to showcase the demos of things I've actually developed along with a few details about tools, frameworks, or just general points of interest on the technical side of things. Once I have this my next goal for the site will be to create a separate page to also show the more creative endeavors - my art, music, sound design, etc. which I may also use for further customization and flair.
            </a>
          </div>
        </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
