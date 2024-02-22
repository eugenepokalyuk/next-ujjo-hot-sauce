import { useEffect, useState } from 'react';

type MousePosition = {
    x: number;
    y: number;
};

type CenterPosition = {
    x: number;
    y: number;
};

const Logo = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [center, setCenter] = useState<CenterPosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        setCenter({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calcTranslate = (position: MousePosition, strength: number): string => {
        const shift = { x: (center.x - position.x) / strength, y: (center.y - position.y) / strength };
        return `translate(${shift.x}px, ${shift.y}px)`;
    };

    return (
        <>
            <img
                src="/images/back-label.svg"
                alt="Ujjo"
                className="h-auto w-full object-cover"
                style={{
                    transform: calcTranslate(mousePosition, 30)
                }}
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src="/images/front-label.svg"
                    alt="Ujjo"
                    className="h-auto w-full object-cover scale-[150%]"
                    style={{
                        transform: `${calcTranslate(mousePosition, 20)} scale(1.5)`
                    }}
                />
            </div>
        </>
    );
};

export default Logo;