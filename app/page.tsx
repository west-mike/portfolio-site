import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/about');

  // The code below won't be executed because of the redirect
  return (
    <div className="grid col-start-3 col-end-13 row-start-4 row-end-13 box-content p-12 border-0 overflow-auto font-text">
      <p className="text-center text-l font-title absolute top-8 left-16">
        Senior Computer Science student at University of Michigan looking for entry-level software engineering roles in mid-August 2025.
      </p>
    </div>
  );
}