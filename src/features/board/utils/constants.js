export const QUADRANTS = [
    {
        id: "DO_NOW",
        label: "Do it right now",
        description: "Urgent & Important",
        headerBg: "bg-bgDarkPink/80",
        headerText: "text-white",
        hoverBg: "hover:bg-bgDarkPink/60",
    },
    {
        id: "SCHEDULE",
        label: "Plan for later",
        description: "Important, not Urgent",
        headerBg: "bg-bgPink",
        headerText: "text-bgDarkGray",
        hoverBg: "hover:bg-bgPink/80",
    },
    {
        id: "DELEGATE",
        label: "Ask for a hand",
        description: "Urgent, but not that deep",
        headerBg: "bg-bgLightPink/70",
        headerText: "text-bgDarkGray",
        hoverBg: "hover:bg-bgLightPink/50",
    },
    {
        id: "ELIMINATE",
        label: "Let it go",
        description: "Not urgent, not needed",
        headerBg: "bg-bgLightGray",
        headerText: "text-bgDarkGray",
        hoverBg: "hover:bg-bgLightGray/70",
    },
];

export const STATUS = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
};

export const BEAR_STATES = [
    { threshold: 0, image: "header-bear-b1" },
    { threshold: 1, image: "header-bear-1" },
    { threshold: 51, image: "header-bear-2" },
    { threshold: 100, image: "header-bear-b2" },
];
