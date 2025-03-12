"use client";

export function MusicMonthSelector({ month, onClick }: { month: string, onClick: () => void }) {
    return (
        <div>
            <button
                className="text-lg hover:text-slate-400 hover:underline hover:cursor-pointer border-none rounded-none"
                onClick={onClick}
            >
                {month}
            </button>
        </div>
    );
}