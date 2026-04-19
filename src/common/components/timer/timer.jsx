import { useState, useEffect } from "react";

export const Timer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeString = date.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });

    const ampm = date
        .toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
        })
        .split(" ")[1];

    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    return (
        <div className="hidden lg:flex py-3 w-52 text-bgDarkGray/80 font-bold rounded-3xl bg-white border border-bgDarkGray flex-col items-center justify-center">
            <span className="font-title">Be kind</span>
            <span className="text-4xl">{timeString}</span>
            <span className="font-bold">{ampm}</span>
            <span className="capitalize">{day}</span>
        </div>
    );
};
