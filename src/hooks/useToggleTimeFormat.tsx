"use client";

import { useEffect, useState } from "react";

export default function useToggleTimeFormat(originalTime: Date) {
    const [isLocaleTime, setIsLocaleTime] = useState<boolean>(true);
    const [time, setTime] = useState<string>(originalTime.toLocaleString());

    useEffect(() => {
        if (isLocaleTime) {
            setTime(originalTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
        } else {
            setTime(originalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
    }, [isLocaleTime, originalTime]);

    return [time, setIsLocaleTime] as const;
}