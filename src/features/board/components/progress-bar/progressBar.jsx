export function ProgressBar({ progress, completed, total, bear }) {
    return (
        <div className="flex items-center gap-4 justify-center lg:px-0 px-6">
            <div className="flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <img
                    src={bear}
                    className="w-14 lg:w-16 object-contain transition-all duration-500 opacity-80"
                    alt="Bear mascot"
                />
            </div>
            <div className="w-full lg:w-40 flex flex-col items-center gap-1 mt-4 lg:mt-2">
                <div className="w-full h-4 rounded-full overflow-hidden border-2 border-bgDarkGray/80">
                    <div
                        className="h-full bg-bgDarkGray/80 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="text-[12px] text-bgDarkGray/80 font-semibold font-item">
                    {total === 0
                        ? "Add your urgent tasks"
                        : `${completed}/${total} urgent done`}
                </span>
            </div>
        </div>
    );
}
