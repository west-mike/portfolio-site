"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useBookData } from "./hooks/useBookData";

export default function Home() {
    const books = useBookData();
    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-4 border-0 overflow-auto font-text">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Date Read</TableCell>
                        <TableCell>Link</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={index}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.month_read} {book.year_read}</TableCell>
                            <TableCell>
                                {book.link && (
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                                        View Details
                                    </a>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}