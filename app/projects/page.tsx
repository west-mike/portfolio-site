import Link from 'next/link'
function getPostLink(postNumber: number) {
    const link = `/projects/p${postNumber}`;
    return (
        <div>
            <Link href={link}>
                Audiolyze
            </Link>
        </div>
    );
}
export default function Home() {
    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13">
            <div className="col-start-1 col-end-11 row-start-1 row-end-1 grid items-center">
                <p className="text-center text-2xl font-title"><b>Most Recent Projects</b></p>
            </div>
            <div className="grid col-start-1 col-end-11 row-start-1 row-end-10 box-content p-16 border-0">
                <div className="grid grid-cols-3 grid-rows-2 items-center text-center font-title">
                    {Array.from({ length: 1 }).map((_, index) => (
                        <div key={index}>{getPostLink(index + 1)}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
