import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ActivityHero = ({ title, image }) => {
    const heroRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current.querySelector("h1"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
            .fromTo(heroRef.current.querySelector("p"),
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: -0.5 }
            );
    }, []);

    return (
        <div
            className="activity-hero"
            style={{ backgroundImage: `url(${image})` }}
            ref={heroRef}
        >
            <div className="activity-hero-content">
                <h1>{title}</h1>
                <p>Discover Your Potential Beyond the Classroom</p>
            </div>
        </div>
    );
};

export default ActivityHero;
