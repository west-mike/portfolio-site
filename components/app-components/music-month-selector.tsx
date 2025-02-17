"use client";

export function MusicMonthSelector({ month, onClick }: { month: string, onClick: () => void }) {
    return (
        <div>
            <button
                className="text-lg hover:bg-slate-400 border-none rounded-none"
                onClick={onClick}
            >
                {month}
            </button>
        </div>
    );
}