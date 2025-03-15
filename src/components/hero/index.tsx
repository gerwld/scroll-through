"use client"
import React, { useRef } from 'react'
import style from './style.module.scss';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const index = () => {
    const maskRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            maskRef.current,
            {scale: 1},
            {
                scale: 30,
                opacity: 0,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: 2,
                    pin: true,
                    start: "top top",
                    end: "bottom+=100px top"
                }
            }
        )

    }, [maskRef, containerRef])

    return (
        <div ref={containerRef} className={style.container}>
            <video autoPlay loop muted>
                <source src="/vid.mp4" type="video/mp4" />
            </video>
            <div ref={maskRef} className={style.mask}>
                <h1>Let the journey begin</h1>
            </div>
        </div>
    )
}

export default index