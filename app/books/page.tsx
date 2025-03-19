"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useBookData } from "./hooks/useBookData";

export default function Home() {
    const books = useBookData();

    // Sort books by date (newest first)
    const sortedBooks = [...books].sort((a, b) => {
        // Create year comparison first
        const yearComparison = parseInt(b.year_read) - parseInt(a.year_read);

        // If years are the same, compare months
        if (yearComparison === 0) {
            const months = {
                "January": 1, "February": 2, "March": 3, "April": 4,
                "May": 5, "June": 6, "July": 7, "August": 8,
                "September": 9, "October": 10, "November": 11, "December": 12
            };

            return months[b.month_read as keyof typeof months] - months[a.month_read as keyof typeof months];
        }

        return yearComparison;
    });

    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-4 border-0 overflow-auto font-text">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Date Read</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedBooks.map((book, index) => (

                        <TableRow key={index}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.month_read} {book.year_read}</TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </div >
    );
}