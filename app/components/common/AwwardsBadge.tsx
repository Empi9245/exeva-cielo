'use client';

import { useScrollStore } from '@/app/stores/scrollStore';
import { useProgress } from '@react-three/drei';
import { usePortalStore, useThemeStore } from '@stores';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

const ExevaBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const isPortalActive = usePortalStore((state) => !!state.activePortalId);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const { progress } = useProgress();

  const [startAnimation, setStartAnimation] = useState(false);
  const loaded = progress === 100;

  useEffect(() => {
    if (loaded) {
      gsap.to(badgeRef.current, {
        duration: 2,
        delay: 2,
        right: 0,
        onComplete: () => setStartAnimation(true),
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (isPortalActive) return;
    if (startAnimation && badgeRef.current) {
      gsap.to(badgeRef.current, {
        right: -scrollProgress * 1000,
        duration: 0,
        ease: 'power2.out',
      });
    }

    return () => {
      gsap.killTweensOf(badgeRef.current);
    }
  }, [startAnimation, scrollProgress]);

  useEffect(() => {
    if (!badgeRef.current) return;
    badgeRef.current.style.scale = isMobile ? '0.7' : '0.9';
  }, [isMobile]);

  return (
    <div
      id="exeva-badge"
      ref={badgeRef}
      style={{
        position: 'fixed',
        zIndex: 999,
        transform: 'translateY(-50%)',
        transformOrigin: 'right top',
        top: '50%',
        right: -120,
      }}
    >
      <a href="https://exeva.it" target="_blank" rel="noopener noreferrer">
        <svg width="53" height="171" viewBox="0 0 53 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="53" height="171" fill="white"/>
          <text
            x="26.5"
            y="155"
            textAnchor="middle"
            fontFamily="serif"
            fontSize="11"
            fontWeight="600"
            letterSpacing="2"
            fill="#111"
            transform="rotate(-90, 26.5, 85.5)"
            dominantBaseline="middle"
          >
            EXEVA
          </text>
          <text
            x="26.5"
            y="28"
            textAnchor="middle"
            fontFamily="serif"
            fontSize="7"
            letterSpacing="1"
            fill="#555"
            transform="rotate(-90, 26.5, 85.5)"
            dominantBaseline="middle"
          >
            DIGITAL AGENCY
          </text>
        </svg>
      </a>
    </div>
  );
};

export default ExevaBadge;
