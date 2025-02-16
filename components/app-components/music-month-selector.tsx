"use client";

export function MusicMonthSelector({ month }: { month: string }) {
    function handleClick() {
        alert(`Selected month: ${month}`);
    }

    return (
        <div>
            <button
                className="text-lg hover:bg-slate-400 border-none rounded-none"
                onClick={handleClick}
            >
                {month}
            </button>
        </div>
    );
}