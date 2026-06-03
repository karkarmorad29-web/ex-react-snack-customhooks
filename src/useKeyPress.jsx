import { useEffect, useState } from "react";

export default function useKeyPress(targetKey) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const isTarget = event => {
            return (
                event.key === targetKey ||
                event.code === targetKey ||
                (targetKey === 'Enter' && event.keyCode === 13)
            );
        };

        const handleKeyDown = event => {
            if (isTarget(event)) {
                setIsPressed(true);
            }
        };

        const handleKeyUp = event => {
            if (isTarget(event)) {
                setIsPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [targetKey]);
    return isPressed;
}




