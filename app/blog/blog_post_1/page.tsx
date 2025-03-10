import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../markdownrenderer';

export default async function Page() {
    const filePath = path.join(process.cwd(), 'public', 'blog_posts', `bp1.md`);
    const markdownContent = fs.readFileSync(filePath, 'utf8');

    return (
        <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content  border-0 overflow-auto font-text">
            <h1 className="text-3xl">Building a Waveform Visualizer in Svelte</h1>
            <p className="text-m text-gray-400 relative left-0"> By Michael West</p>
            <p className="text-m text-gray-400 relative left-0"> March 10, 2025</p>
            <br></br>
            <MarkdownRenderer content={markdownContent}></MarkdownRenderer>
        </div >
    );
}