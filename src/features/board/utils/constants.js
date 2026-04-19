export const QUADRANTS = [
    {
        id: "DO_NOW",
        label: "Do Now",
        description: "Urgent & Important",
        headerBg: "bg-bgDarkGray",
        headerText: "text-white",
        hoverBg: "hover:bg-bgDarkGray/80",
    },
    {
        id: "SCHEDULE",
        label: "Schedule",
        description: "Important, not Urgent",
        headerBg: "bg-[#c084a0]",
        headerText: "text-white",
        hoverBg: "hover:bg-[#c084a0]/80",
    },
    {
        id: "DELEGATE",
        label: "Delegate",
        description: "Urgent, not Important",
        headerBg: "bg-[#e8a8c4]",
        headerText: "text-bgDarkGray",
        hoverBg: "hover:bg-[#e8a8c4]/80",
    },
    {
        id: "ELIMINATE",
        label: "Eliminate",
        description: "Neither",
        headerBg: "bg-bgLightPink",
        headerText: "text-bgDarkGray",
        hoverBg: "hover:bg-bgLightPink/80",
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
