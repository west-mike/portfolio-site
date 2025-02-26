import { useState, useEffect } from "react";
import { Song } from "../types";

export function useMusicData(month: string): Song[] {
    const [songs, setSongs] = useState<Song[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // convert month input from selected month to file prefix
                const filePrefix = month.replace(/\s/g, "").toLowerCase();
                // fetch file
                const res = await fetch(`/music/${filePrefix}.json`);
                if (!res.ok) throw new Error("File not found");
                // convert file data to json
                const data = await res.json();
                // make songs stateful [] equal to "songs" key in json, empty if error
                setSongs(data.songs);
            } catch (err) {
                console.error(err);
                setSongs([]);
            }
        };
        fetchData();
    }, [month]);

    return songs;
}
