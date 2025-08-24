import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
          <title>Scramble – Fast-Paced Word Game for iPhone</title>
          <meta name="description" content="Scramble is a thrilling word game for iPhone. Swipe, tap, and scroll your way to five-letter victory in seconds. Download now!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Scramble – Fast-Paced Word Game for iPhone" />
          <meta property="og:description" content="Scramble is a thrilling word game for iPhone. Swipe, tap, and scroll your way to five-letter victory in seconds." />
          <meta property="og:image" content="/scramble3.png" />
          <meta property="og:url" content="https://playscramblegame.com" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <p>siq main</p>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <p>siq footer</p>
        </footer>
      </div>
    </>
  );
}
