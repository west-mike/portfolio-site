import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/app/blog/markdownrenderer';

export default async function Page() {
    const filePath = path.join(process.cwd(), 'public', 'project_writeups', `p2.md`);
    const markdownContent = fs.readFileSync(filePath, 'utf8');

    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-12 border-0 overflow-auto font-title">
            <h1 className="text-3xl">Linkdgen</h1>
            <p className="text-m text-gray-400 relative left-0"> By Michael West</p>
            <p className="text-m text-gray-400 relative left-0"> March 26, 2025</p>
            <br></br>
            <MarkdownRenderer content={markdownContent}></MarkdownRenderer>
        </div>
    );
}