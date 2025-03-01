import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from 'next/image';


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
        className={`${orbitronBold} ${orbitronStd} antialiased overscroll-contain bg-black text-white`}
      >
        <div className="grid grid-cols-12 grid-rows-12 h-screen w-screen">
          <div className="grid grid-rows-subgrid grid-cols-subgrid col-start-1 col-end-3 row-start-1 row-end-3 font-title">
            <div className="col-span-2 row-span-2 flex items-center justify-center">
              <Link href="/about">
                <div className="text-center">
                  <p className="text-2xl">Michael West</p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <Image src="/favicon/map-pin.svg" alt="map pin" width={20} height={20} />
                    <p className="text-sm">Ann Arbor, MI</p>
                  </div>
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
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <div className="relative group">
                        <Image src="/favicon/python-logo-only.svg" alt="python two snakes logo" width={32} height={32} className="w-8 h-8" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">Python</span>
                      </div>
                      <div className="relative group">
                        <Image src="/favicon/ISO_C++_Logo.svg" alt="C++ Logo" width={32} height={32} className="w-8 h-8" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">C++</span>
                      </div>
                      <div className="relative group">
                        <Image src="/favicon/Unofficial_JavaScript_logo_2.svg" alt="JS Logo" width={32} height={32} className="w-8 h-8" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">JavaScript</span>
                      </div>
                      <div className="relative group">
                        <Image src="/favicon/ts-logo-128.svg" alt="TS Logo" width={32} height={32} className="w-8 h-8" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">Web Frameworks</p>
                      <div className="flex flex-row gap-4 justify-center items-center">
                        <div className="relative group">
                          <Image src="/favicon/React-icon.svg" alt="react light blue atoms logo" width={32} height={32} className="w-8 h-8" />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">React</span>
                        </div>
                        <div className="relative group">
                          <Image src="/favicon/svelte-logo.svg" alt="Svelte Logo" width={32} height={32} className="w-8 h-8" />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">Svelte</span>
                        </div>
                        <div className="relative group">
                          <svg
                            aria-label="Next.js logomark"
                            className="w-8 h-8"
                            role="img"
                            viewBox="0 0 180 180"
                          >
                            <mask
                              height="180"
                              id=":S3:mask0_408_134"
                              maskUnits="userSpaceOnUse"
                              width="180"
                              x="0"
                              y="0"
                              style={{ maskType: 'alpha' }}
                            >
                              <circle cx="90" cy="90" fill="black" r="90"></circle>
                            </mask>
                            <g mask="url(#:S3:mask0_408_134)">
                              <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
                              <path
                                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                fill="url(#:S3:paint0_linear_408_134)"
                              ></path>
                              <rect
                                fill="url(#:S3:paint1_linear_408_134)"
                                height="72"
                                width="12"
                                x="115"
                                y="54"
                              ></rect>
                            </g>
                            <defs>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id=":S3:paint0_linear_408_134"
                                x1="109"
                                x2="144.5"
                                y1="116.5"
                                y2="160.5"
                              >
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                              </linearGradient>
                              <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id=":S3:paint1_linear_408_134"
                                x1="121"
                                x2="120.799"
                                y1="54"
                                y2="106.875"
                              >
                                <stop stopColor="white"></stop>
                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">Next.js</span>
                        </div>
                        <div className="relative group">
                          <Image src="/favicon/icons8-flask.svg" alt="Flask Logo" width={32} height={32} className="w-8 h-8" />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"><a target="_blank" href="https://icons8.com/icon/ewGOClUtmFX4/flask">Flask</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Libraries</p>
                  <p className="text-base">PyTorch, Pandas, NumPy, OpenCV, Selenium</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="text-xl font-bold">SOCIAL</p>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <Link href="https://github.com/west-mike"><Image src="/favicon/github-mark-white.svg" alt="github white" width={32} height={32} className="w-8 h-8" /></Link>
                    <Link href="https://www.linkedin.com/in/west-mike/"><Image src="/favicon/LI-In-Bug.png" alt="linkedin in logo" width={32} height={32} className="w-8 h-8" /></Link>
                  </div>

                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold"><a href="/Resume.pdf" download>RESUME</a></p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 grid-rows-12 col-start-3 col-end-13 row-start-2 row-end-13 border-white font-bold font-title relative">
            <div className="col-span-12   flex items-center justify-between relative">
              <div className="absolute right-2 top-[-2.5rem]">
                <div className="flex space-x-4 border-b border-white">
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/projects" className="hover:text-slate-700 transition-colors">Projects</Link>
                    <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
                    <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/books" className="hover:text-slate-700 transition-colors">Books</Link>
                    <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/music" className="hover:text-slate-700 transition-colors">Music</Link>
                    <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative flex items-center justify-center p-2 group">
                    <Link href="/about" className="hover:text-slate-700 transition-colors">About</Link>
                    <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 row-span-11 overflow-auto">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
