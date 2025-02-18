"use client";
import { useState } from 'react';
import { MusicMonthSelector } from "@/components/app-components/music-month-selector";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useMusicData } from "./hooks/useMusicData";

export default function MusicPage() {
    const [curMonth, setCurMonth] = useState("February 25");
    const [disMonth, setDisMonth] = useState("February 2025");
    const handleMonthClick = (month: string) => {
        setCurMonth(month);
        const index = month.search(/\d/);
        setDisMonth(month.slice(0, index) + '20' + month.slice(index));
    };

    const songs = useMusicData(curMonth);

    return (
        <div className="grid grid-cols-12 grid-rows-12 h-screen w-screen">
            <div className="col-start-1 col-end-3 row-start-1 row-end-13 p-4">
                <h2 className="text-2xl font-bold font-title">The Cut</h2>
                <ScrollArea className="h-full w-full rounded-md border-none items-center">
                    <h3 className="font-bold text-xl underline m-0">2025</h3>
                    <MusicMonthSelector month="February 25" onClick={() => handleMonthClick("February 25")} />
                </ScrollArea>
            </div>
            <div className="col-start-3 col-end-13 row-start-1 row-end-3 p-2 border-l-1 border-gray-500">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xl font-bold">{disMonth}</p>
                </div>
                <div className="box-content border-0 overflow-auto font-text text-s italic text-gray-300">
                    The Cut is my curated monthly playlist of songs that I have been listening to. I try to keep it high-quality and genre-spanning.

                </div>
            </div>
            <div className="col-start-3 col-end-10 row-start-2 row-end-13 p-2 border-l-1 border-gray-500">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Artist</TableCell>
                            <TableCell>Album</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Link</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {songs.map((song, index) => (
                            <TableRow key={index}>
                                <TableCell>{song.title}</TableCell>
                                <TableCell><a href={song.artist_link} target="_blank">{song.artist}</a></TableCell>
                                <TableCell><a href={song.album_link} target="_blank">{song.album}</a></TableCell>
                                <TableCell>{song.genre}</TableCell>
                                <TableCell><a href={song.link} target="_blank" rel="noopener noreferrer">Open on Spotify</a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div >
    );
}