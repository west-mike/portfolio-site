
import { MusicMonthSelector } from "@/components/app-components/music-month-selector";
import { ScrollArea } from "@/components/ui/scroll-area";



export default function MusicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2 className="absolute left-4 top-4 text-2xl font-bold font-title">The Cut</h2>
            <ScrollArea className="h-[200px] inline-block rounded-md border p-4">
                <h3 className="font-bold text-xl underline">2025</h3>
                <MusicMonthSelector month="February" />
            </ScrollArea>
            <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-4 border-0 overflow-auto font-text">
                Music Page
                {children}
            </div>
        </div>
    );
}