import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PortalHero = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroRef = useRef(null);
    const slidesRef = useRef([]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        const next = (currentSlide + 1) % slides.length;

        const currentEl = slidesRef.current[currentSlide];
        const nextEl = slidesRef.current[next];

        // "Revolutionary" GSAP Transition
        const tl = gsap.timeline();

        tl.to(currentEl.querySelector('img'), {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })
            .fromTo(nextEl.querySelector('img'),
                { scale: 1.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" },
                "-=1"
            )
            .fromTo(nextEl.querySelector('.portal-hero-content > *'),
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
                "-=0.5"
            );

        setCurrentSlide(next);
    };

    return (
        <div className="portal-hero" ref={heroRef}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`portal-slide ${index === currentSlide ? 'active' : ''}`}
                    ref={el => slidesRef.current[index] = el}
                    style={{ opacity: index === 0 ? 1 : 0, visibility: 'visible' }}
                >
                    <img src={slide.image} alt={slide.title} />
                    <div className="portal-hero-content inner-row">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortalHero;
