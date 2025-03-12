"use client";
import { useState } from 'react';
import { MusicMonthSelector } from "@/components/app-components/music-month-selector";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useMusicData } from "./hooks/useMusicData";
import { Song } from "./types";

export default function MusicPage() {
    const [curMonth, setCurMonth] = useState("February 25");
    const [disMonth, setDisMonth] = useState("February 2025");

    const handleMonthClick = (month: string) => {
        setCurMonth(month);
        const index = month.search(/\d/);
        setDisMonth(month.slice(0, index) + '20' + month.slice(index));
    };

    const songs: Song[] = useMusicData(curMonth);

    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content border-0 h-full">
            <div className="grid grid-cols-12 grid-rows-6 h-full">
                {/* Sidebar */}
                <div className="col-span-2 row-span-6 p-4 border-r border-gray-500">
                    <h2 className="text-2xl font-bold font-title">The Cut</h2>
                    <ScrollArea className="h-[90%] w-full rounded-md border-none">
                        <h3 className="font-bold text-xl underline m-0">2025</h3>
                        <MusicMonthSelector month="March" onClick={() => handleMonthClick("March 25")} />
                        <MusicMonthSelector month="February" onClick={() => handleMonthClick("February 25")} />
                    </ScrollArea>
                </div>

                {/* Header */}
                <div className="col-span-10 row-span-1 p-4">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">{disMonth}</p>
                    </div>
                    <p className="text-sm italic text-gray-300">
                        The Cut is my curated monthly playlist of songs that I have been listening to. I try to keep it high-quality and genre-spanning.
                    </p>
                </div>

                {/* Table */}
                <div className="col-span-10 row-span-5 p-4 pt-0 overflow-auto">
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
                                    <TableCell><a href={song.link} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 hover:underline ">{song.title}</a></TableCell>
                                    <TableCell><a href={song.artist_link} target="_blank" className="hover:text-slate-400 hover:underline ">{song.artist}</a></TableCell>
                                    <TableCell><a href={song.album_link} target="_blank" className="hover:text-slate-400 hover:underline ">{song.album}</a></TableCell>
                                    <TableCell>{song.genre}</TableCell>
                                    <TableCell><a href={song.link} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 hover:underline ">Open on Spotify</a></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}