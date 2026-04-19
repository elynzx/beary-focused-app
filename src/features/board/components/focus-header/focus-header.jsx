import { LuChevronLeft } from "react-icons/lu";

export function FocusHeader({ title, description, onBack }) {
    return (
        <div className="flex flex-col items-start gap-4 ml-6">
            <button
                onClick={onBack}
                className="flex items-center gap-1 text-xs text-bgDarkGray/80 hover:text-bgDarkGray transition-colors"
            >
                <LuChevronLeft /> Back
            </button>
            <div className="mt-4">
                <h1 className="text-lg font-bold text-bgDarkGray">{title}</h1>
                <p className="text-xs text-bgDarkGray/80">{description}</p>
            </div>
        </div>
    );
}
