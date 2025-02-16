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
            <div className="grid grid-rows-subgrid grid-cols-subgrid col-start-1 col-end-3 row-start-1 row-end-3 font-title">
              <div className="col-span-2 row-span-2 flex items-center justify-center">
                <Link href="/">
                  <div className="text-center">
                    <p className="text-2xl">Michael West</p>
                    <p className="text-sm">westmike at umich.edu</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-subgrid grid-rows-subgrid col-start-1 col-end-3 row-start-4 row-end-13 font-text">
              <div className="col-span-2 flex flex-col gap-4 items-center text-center justify-self-center">
                <div className="flex flex-col gap-8 items-center text-center">
                  <div className="flex flex-col">
                    <div className="flex flex-col ">
                      <p className="text-xl font-bold">SKILLS</p>
                      <p className="text-lg font-bold">Languages</p>
                      <p className="text-base ">Python, C/C++, JavaScript, Java, MATLAB</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">Libraries</p>
                      <p className="text-base">PyTorch, Pandas, NumPy, Flask, React, Next.js, Selenium</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">Subjects</p>
                      <p className="text-base">
                        Computer Vision<br />
                        Machine Learning<br />
                        Full Stack Development<br />
                        API/Backend Development<br />
                        Distributed Computing
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-xl font-bold">SOCIAL</p>
                      <p className="text-lg"><Link href="https://github.com/west-mike">GitHub</Link></p>
                      <p className="text-lg"><Link href="https://www.linkedin.com/in/west-mike/">LinkedIn</Link></p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold"><a href="/Resume.pdf" download>RESUME</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 grid-rows-12 col-start-3 col-end-13 row-start-4 row-end-13 border-l-4 border-white font-bold relative">
              <div className="col-span-12 border-t-4 border-white flex items-center justify-between relative">
                <div className="absolute right-2 top-[-2.5rem] flex space-x-4">
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/projects" className="group-hover:text-slate-700">Projects</Link>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-slate-700"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/blog" className="group-hover:text-slate-700">Blog</Link>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-slate-700"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/books" className="group-hover:text-slate-700">Books</Link>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-slate-700"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/music" className="group-hover:text-slate-700">Music</Link>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-slate-700"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/about" className="group-hover:text-slate-700">About</Link>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-slate-700"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 row-span-11 overflow-auto">
                {children}
              </div>
            </div>

          </div>
        </div>
      </body>
    </html >
  );
}
