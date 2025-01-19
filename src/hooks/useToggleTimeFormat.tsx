"use client";

import { useLayoutEffect, useState } from "react";

export default function useToggleTimeFormat(originalTime: Date) {
    const [isLocaleTime, setIsLocaleTime] = useState<boolean>(true);
    const [time, setTime] = useState<string>(originalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useLayoutEffect(() => {
        if (!isLocaleTime) {
            setTime(originalTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
        } else {
            setTime(originalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
    }, [isLocaleTime, originalTime]);

    return [time, setIsLocaleTime] as const;
}