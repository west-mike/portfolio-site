import { useState, useEffect } from "react";

export function useMusicData(month: string) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const filePrefix = month.replace(/\s/g, "").toLowerCase();
                const res = await fetch(`/music/${filePrefix}.json`);
                if (!res.ok) throw new Error("File not found");
                const data = await res.json();
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
