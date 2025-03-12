import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className="grid col-start-3 col-end-13 row-start-4 row-end-13">
                <div className="col-start-1 col-end-11 row-start-1 row-end-1 grid items-center">
                    <p className="text-left text-3xl font-title"><b>Most Recent Blog Posts</b></p>
                </div>
            </div>
            <div className="grid-rows-subgrid col-start-1 col-end-11 row-start-2 row-end 11 mt-4">
                <Link href='/blog/blog_post_1' className="font-title text-xl mt-32 text-align-bottom hover:text-gray-300 hover:underline">
                    Building a Waveform Visualizer in Svelte
                    <span className="text-m text-gray-500">&nbsp;3/10/25</span>
                </Link>

                <Link href="/blog/all">
                    <p className="text-right">View All Posts</p>
                </Link>
            </div>
        </>
    );
}