import { useEffect, useState } from "react";

export default function useCustomPointer(icon = "fas fa-dragon") {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = event => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                transform: 'translate(-50%, +50%)',
                cursor: 'none'

            }}
        >
            {icon = "fas fa-dragon"}
        </div>
    )
}