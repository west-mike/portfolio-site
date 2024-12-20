import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Link from 'next/link'
import "./globals.css";

const orbitronStd = Orbitron({
  weight: '400',
  subsets: ["latin"]
});
const orbitronBold = Orbitron({
  weight: '700',
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: "Michael West's Portfolio",
  description: "A young software engineer hungry for new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitronBold} ${orbitronStd} antialiased overscroll-contain`}
      >
        <div className="">
          <div className="grid grid-cols-12 grid-rows-12 h-screen w-screen">
            <div className="grid grid-rows-subgrid grid-cols-subgrid col-start-2 col-end-4 row-start-2 row-end-3 font-text">
              <div className="grid grid-rows-2 grid-cols-1 item-center">
                <Link href="/">
                  <p className="text-lg text-center">Michael West</p>
                  <p className="text-sm text-center">westmike at umich.edu</p>
                </Link>
              </div>
            </div>
            <div className="grid col-start-10 col-end-13 row-start-3 row-end-4 font-bold grid-cols-3 grid-rows-4 text-center font-text">
              <div className="grid col-start-1 col-end-1 row-start-4 row-end-4 relative top-1 border-b-4 border-slate-300 hover:border-slate-700 "><Link href="/projects">Projects</Link></div>
              <div className="grid col-start-2 col-end-2 row-start-4 row-end-4 relative top-1 border-b-4 border-slate-300 hover:border-slate-700"><Link href="/blog">Blog</Link></div>
              <div className="grid col-start-3 col-end-3 row-start-4 row-end-4 relative top-1 border-b-4 border-slate-300 hover:border-slate-700"><Link href="/about">About</Link></div>
            </div>
            <div className="grid grid-cols-subgrid grid-rows-subgrid col-start-1 col-end-3 row-start-4 row-end-13 font-text">
              <div className="grid grid-rows-subgrid row-start-1 row-end-4 col-start-1 col-end-3">
                <div className="grid grid-rows-subgrid row-start-1 row-end-1 col-start-1 col-end-3 text-center">
                  <div className="grid grid-rows-6 grid-cols-1 text-center">
                    <p className="grid grid-rows-subgrid row-start-1 row-end-2 text-xl"><b>SKILLS</b></p>
                    <p className="grid grid-rows-subgrid row-start-2 row-end-3 text-lg">Languages</p>
                    <p className="grid grid-rows-subgrid row-start-4 row-end-6 text-base">Python, C/C++, JavaScript, Java, MATLAB</p>
                  </div>
                </div>
                <div className="grid grid-rows-subgrid row-start-2 row-end-2 col-start-1 col-end-3">
                  <div className="grid grid-rows-4 grid-cols-1 text-center">
                    <p className="grid grid-rows-subgrid row-start-1 row-end-2 text-lg">Libraries</p>
                    <p className="grid grid-rows-subgrid row-start-2 row-end-4 text-base">PyTorch, Pandas, NumPy, Flask, React, Next.js, Selenium</p>
                  </div>
                </div>
                <div className="grid grid-rows-subgrid row-start-3 row-end-4 col-start-1 col-end-3">
                  <div className="grid grid-rows-6 grid-cols-1 text-center">
                    <p className="grid grid-rows-subgrid row-start-1 row-end-2 text-lg">Subjects</p>
                    <p className="grid grid-rows-subgrid row-start-3 row-end-6 text-base">
                      Computer Vision<br />
                      Machine Learning<br />
                      Full Stack Development<br />
                      API/Backend Development<br />
                      Distributed Computing
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-subgrid row-start-5 row-end-7 col-start-1 col-end-3">
                <div className="grid grid-rows-4 grid-cols-1 text-center">
                  <p className="grid grid-rows-subgrid row-start-1 row-end-2 text-xl"><b>SOCIAL</b></p>
                  <p className="grid grid-rows-subgrid row-start-3 row-end-4 text-lg"><Link href="https://github.com/west-mike">GitHub</Link></p>
                  <p className="grid grid-rows-subgrid row-start-5 row-end-6 text-lg"><Link href="https://www.linkedin.com/in/west-mike/">LinkedIn</Link></p>
                </div>
              </div>
              <div className="grid grid-rows-subgrid row-start-7 row-end-8 col-start-1 col-end-3 text-center">
                <p className="text-xl"><b><a href="public/Resume.pdf" download>RESUME</a></b></p>
              </div>
            </div>
            <div className="grid grid-cols-subgrid grid-rows-subgrid col-start-3 col-end-10 row-start-4 row-end-13 border-t-4 border-l-4 border-white font-bold">
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
