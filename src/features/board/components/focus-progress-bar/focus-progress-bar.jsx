export function FocusProgressBar({ completed, total, progress, colorClass }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-bgGray/20 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
                    style={{ width: `${progress}%` }}
                />
            </div>
            <span className="text-xs text-bgDarkGray/80 font-semibold">
                {completed} / {total} done
            </span>
        </div>
    );
}