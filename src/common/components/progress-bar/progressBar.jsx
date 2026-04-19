export function ProgressBar({ progress, completed, total, bear }) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <img
                    src={bear}
                    className="w-16 object-contain transition-all duration-500"
                    alt="Bear mascot"
                />
            </div>
            <div className="w-30 flex flex-col items-center gap-1 mt-2">
                <div className="w-full h-4 bg-bgLightGray rounded-full overflow-hidden border-2 border-bgDarkGray">
                    <div
                        className="h-full bg-bgDarkGray rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="text-[10px] text-bgDarkGray font-semibold">
                    {total === 0
                        ? "Add your urgent tasks"
                        : `${completed}/${total} urgent done`}
                </span>
            </div>
        </div>
    );
}
