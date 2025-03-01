import Image from 'next/image';
export default function Home() {
    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-4 border-0 overflow-auto font-text">
            <div className="flex flex-row gap-4 overflow-auto ">
                <div className="w-48 h-48 rounded-full bg-gray-300 self-start">
                    <Image
                        src="/images/headshot_website.jpg"
                        alt="Headshot"
                        className="w-full h-full object-cover rounded-full"
                        width={192}
                        height={192}
                        quality={100}
                        layout="responsive"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col gap-4 mt-4 ml-auto">
                        <section>
                            <h2 className="text-2xl font-bold font-title">About Me</h2>
                            <p className="text-lg font-body font-normal">
                                I am currently a senior studying computer science with a minor in music at the University of Michigan. I graduate in May of 2025
                                and am seeking full time employment as early as mid-August 2025. I am passionate about software engineering and am excited to have
                                the opportunity to contribute to a team and hone my development skills. My primary areas of interest are full-stack development,
                                computer vision applications, backend and API development, and machine learning.
                                <br /><br />
                                Outside of class I serve as the sponsorship lead for MHacks which is the premier student-run hackathon organization at Michigan. I
                                also play euphonium in both the Michigan Marching Band and the University Band. These experiences have led me to developing excellent
                                interpersonal communication skills as well as time management skills and the ability to self-start and learn independently.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-title">My Goals</h2>
                            <div className="text-lg font-body font-normal">I have three main goals for my software engineering career:
                                <ol className="indent-8">
                                    <li>1. Contribute meaningfully to open-source software that benefits a community I&apos;m passionate about.</li>
                                    <li>2. Develop deep and lasting relationships with my coworkers.</li>
                                    <li>3. Become a manager that oversees product development and coordinates several different subteams.</li>
                                </ol>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold font-title">About the Site</h2>
                            <p className="text-lg font-body font-normal">I wrote this site using the Next.js framework for React with TypeScript. The site is
                                deployed to a domain I own using Vercel. I built this site for two primary reasons: learning how to use Next.js and developing my
                                web development skills, and showcasing my personal brand and giving myself a platform to build upon for the future in an effort to
                                inspire me to develop more often in my free time.
                                <br /><br />
                                I have two core concepts guiding my site design: a black, white, and gray color scheme, and a minimalistic yet slightly future-retro UI. I will always continue to update this site and continue to perfect the UI so feel free to check
                                back in the future and see how it has grown!
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold font-title">Contact Me</h2>
                            <p className="text-lg font-body font-normal">For business-related inquiries please contact my personal email: <b><i>westmike AT umich.edu</i></b>. For comments, questions,
                                or concerns regarding this site or any of my posted projects or posts, please contact the primary email for this site: <b><i>michael AT westmike.com</i></b>. I will do my
                                best to respond to all legitimate inquiries within a timely manner. Thank you!
                            </p>
                        </section>
                    </div>
                </div>
            </div>


        </div>
    );
}