import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../markdownrenderer';

export default async function Page() {
    const filePath = path.join(process.cwd(), 'public', 'blog_posts', `bp1.md`);
    const markdownContent = fs.readFileSync(filePath, 'utf8');

    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-12 border-0 overflow-auto font-title">
            <MarkdownRenderer content={markdownContent}></MarkdownRenderer>
        </div >
    );
}