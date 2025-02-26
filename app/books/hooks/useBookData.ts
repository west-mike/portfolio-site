import { useState, useEffect } from "react";
import { Book } from "../types";

export function useBookData(): Book[] {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch file
                const res = await fetch(`/books/books.json`);
                if (!res.ok) throw new Error("File not found");
                // convert file data to json
                const data = await res.json();
                // make songs stateful [] equal to "songs" key in json, empty if error
                setBooks(data.books);
            } catch (err) {
                console.error(err);
                setBooks([]);
            }
        };
        fetchData();
    });

    return books;
}
