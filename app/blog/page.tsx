import Link from 'next/link'
function getPostLink(postNumber: number) {
    const link = `/blog/blog_post_${postNumber}`;
    return (
        <div>
            <Link href={link}>
                Post {postNumber}
            </Link>
        </div>
    );
}
export default function Home() {
    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13">
            <div className="col-start-1 col-end-11 row-start-1 row-end-1 grid items-center">
                <p className="text-center text-2xl font-title"><b>Most Recent Blog Posts</b></p>
            </div>
            <div className="grid col-start-1 col-end-11 row-start-1 row-end-10 box-content p-16 border-0">
                <div className="grid grid-cols-3 grid-rows-1 items-center text-center font-title">
                    {Array.from({ length: 1 }).map((_, index) => (
                        <div key={index}>{getPostLink(index + 1)}</div>
                    ))}
                </div>
            </div>
            <div className="grid col-start-11 col-end-12 row-start-12 row-end-13 items-center font-title">
                <Link href="/blog/all">
                    <p className="text-center">View All Posts</p>
                </Link>
            </div>
        </div>
    );
}