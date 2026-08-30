import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaPlay, 
  FaPause, 
  FaVolumeMute, 
  FaVolumeUp, 
  FaExpand, 
  FaCompress,
  FaCompass, 
  FaLocationArrow, 
  FaBolt, 
  FaMapMarkerAlt,
  FaArrowDown
} from 'react-icons/fa';

import heroVideo from '../../assets/hero-vid.mp4';
import heroPoster from '../../assets/hero-poster2.jpg';
import '../../css/cinematic-drone.css';

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    id: 0,
    time: 0,
    label: '00:00',
    title: 'Main Gate & Logistics Quad',
    desc: 'Secure entrance, administrative pavilion, and dedicated school transit hub.',
    coords: '1.3197° S, 36.8152° E',
    altitude: '42m AGL',
    heading: '240° WSW',
  },
  {
    id: 1,
    time: 6,
    label: '00:06',
    title: 'Modern Academic Blocks',
    desc: 'State-of-the-art CBC and Cambridge classroom wings with tinted solar glass facades.',
    coords: '1.3194° S, 36.8158° E',
    altitude: '56m AGL',
    heading: '258° W',
  },
  {
    id: 2,
    time: 14,
    label: '00:14',
    title: 'Olympic Pool & Sports Arena',
    desc: 'Championship swimming pool, soccer pitches, basketball courts, and athletics pavilion.',
    coords: '1.3188° S, 36.8165° E',
    altitude: '68m AGL',
    heading: '275° WNW',
  },
  {
    id: 3,
    time: 22,
    label: '00:22',
    title: '40-Year Campus Legacy',
    desc: 'Expansive green courtyards, STEM innovation laboratories, and senior school facilities.',
    coords: '1.3182° S, 36.8170° E',
    altitude: '74m AGL',
    heading: '290° NW',
  },
];

const CinematicDroneExperience = ({ showHeader = true }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const triggerRef = useRef(null);
  const decayTimerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(1.0);
  const [speedCategory, setSpeedCategory] = useState('CRUISE'); // CRUISE | BOOST | HYPER
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(28);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [pilotMode, setPilotMode] = useState(false); // false = Cruise/Velocity boost, true = direct scroll scrub

  /* ── 1. Scroll-Driven Velocity Acceleration ────────────────────────── */
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        if (pilotMode) {
          // Direct Scrubbing Mode: Map scroll progress to video timeline
          if (videoRef.current && videoRef.current.duration) {
            const scrubTarget = self.progress * videoRef.current.duration;
            videoRef.current.currentTime = scrubTarget;
          }
          return;
        }

        // Ambient Cruise Mode with Dynamic Scroll Velocity Boost
        const velocity = Math.abs(self.getVelocity()); // Pixels per second

        if (velocity > 80) {
          // Calculate boosted playback rate: 1.0 up to 3.5x
          const rate = Math.min(3.5, Math.max(1.0, 1.0 + (velocity / 900) * 1.5));
          const roundedRate = parseFloat(rate.toFixed(1));

          if (videoRef.current) {
            videoRef.current.playbackRate = roundedRate;
          }
          setCurrentSpeed(roundedRate);

          if (roundedRate >= 2.5) {
            setSpeedCategory('HYPER');
          } else if (roundedRate >= 1.5) {
            setSpeedCategory('BOOST');
          } else {
            setSpeedCategory('CRUISE');
          }

          // Clear any pending ease-down
          if (decayTimerRef.current) clearTimeout(decayTimerRef.current);

          // Smooth decay back to cruise speed when scrolling pauses
          decayTimerRef.current = setTimeout(() => {
            const easeBack = () => {
              if (!videoRef.current) return;
              const current = videoRef.current.playbackRate;
              if (current > 1.05) {
                const nextVal = parseFloat((current - 0.2).toFixed(1));
                videoRef.current.playbackRate = Math.max(1.0, nextVal);
                setCurrentSpeed(Math.max(1.0, nextVal));
                if (nextVal < 1.5) setSpeedCategory('CRUISE');
                else if (nextVal < 2.5) setSpeedCategory('BOOST');
                setTimeout(easeBack, 60);
              } else {
                videoRef.current.playbackRate = 1.0;
                setCurrentSpeed(1.0);
                setSpeedCategory('CRUISE');
              }
            };
            easeBack();
          }, 180);
        }
      },
    });

    triggerRef.current = scrollTriggerInstance;

    return () => {
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (decayTimerRef.current) clearTimeout(decayTimerRef.current);
    };
  }, [pilotMode]);

  /* ── 2. Video Time Updates & Chapter Detection ────────────────────── */
  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);

    // Identify active chapter based on timestamp
    for (let i = CHAPTERS.length - 1; i >= 0; i--) {
      if (curr >= CHAPTERS[i].time) {
        setActiveChapterIndex(i);
        break;
      }
    }
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 28);
    }
  };

  /* ── 3. Interactive Controls ───────────────────────────────────────── */
  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const seekToChapter = (chap) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = chap.time;
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimelineSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const activeChap = CHAPTERS[activeChapterIndex] || CHAPTERS[0];
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  // Calculate Speedometer SVG Stroke Dashoffset (Circumference ~ 207)
  const strokeDashoffset = 207 - (207 * (currentSpeed / 3.5));

  return (
    <div 
      className={`drone-experience-container ${pilotMode ? 'mode-pilot' : ''}`} 
      ref={containerRef}
      id="campus-drone-showcase"
    >
      {/* Dynamic Scroll Speed Notice */}
      <div className="drone-scroll-hint">
        <FaArrowDown className="drone-scroll-hint-icon" />
        <span>
          {pilotMode 
            ? 'PILOT MODE ACTIVE: Scroll up or down to fly the drone across campus' 
            : 'SCROLL VELOCITY ENGINE: Scroll faster to accelerate drone flight speed'}
        </span>
      </div>

      {/* ── Main Video Display Stage ── */}
      <div className="drone-video-stage">
        <video
          ref={videoRef}
          src={heroVideo}
          poster={heroPoster}
          className="drone-video-element"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />

        {/* Ambient Grade & Scanlines */}
        <div className="drone-video-grade" />
        <div className="drone-scanlines" />

        {/* ── Heads-Up Display (HUD) Telemetry Overlay ── */}
        <div className="drone-hud-overlay">
          {/* Tech Corner Crosshairs */}
          <div className="hud-corner hud-corner-tl" />
          <div className="hud-corner hud-corner-tr" />
          <div className="hud-corner hud-corner-bl" />
          <div className="hud-corner hud-corner-br" />

          {/* HUD Top Status Bar */}
          <div className="drone-hud-top">
            <div className="hud-badge-live">
              <span className="hud-dot-recording" />
              <span>4K AERIAL TELEMETRY</span>
            </div>

            <div className="hud-telemetry-pill">
              <div className="hud-telemetry-item">
                <FaCompass style={{ color: '#38bdf8' }} />
                <span className="label">HDG</span>
                <span className="value">{activeChap.heading}</span>
              </div>
              <div className="hud-telemetry-item">
                <FaLocationArrow style={{ color: '#818cf8' }} />
                <span className="label">ALT</span>
                <span className="value">{activeChap.altitude}</span>
              </div>
              <div className="hud-telemetry-item">
                <span className="label">GPS</span>
                <span className="value">{activeChap.coords}</span>
              </div>
            </div>
          </div>

          {/* Center Drone Crosshairs */}
          <div className="hud-center-crosshair">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <circle cx="50" cy="50" r="30" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="50" y1="12" x2="50" y2="30" stroke="#38bdf8" strokeWidth="2" />
              <line x1="50" y1="70" x2="50" y2="88" stroke="#38bdf8" strokeWidth="2" />
              <line x1="12" y1="50" x2="30" y2="50" stroke="#38bdf8" strokeWidth="2" />
              <line x1="70" y1="50" x2="88" y2="50" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="50" cy="50" r="3" fill="#38bdf8" />
            </svg>
          </div>

          {/* Live Reactive Speedometer Widget */}
          <div className="hud-speed-gauge-card">
            <svg className="speed-gauge-svg" viewBox="0 0 80 80">
              <defs>
                <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <circle className="speed-gauge-bg" cx="40" cy="40" r="33" />
              <circle 
                className="speed-gauge-fill" 
                cx="40" 
                cy="40" 
                r="33" 
                style={{ strokeDasharray: 207, strokeDashoffset }}
              />
            </svg>
            <div className="speed-gauge-text">
              <span className="speed-gauge-number">{currentSpeed.toFixed(1)}x</span>
              <span className="speed-gauge-unit">SPEED</span>
            </div>
            <div className={`speed-status-badge ${speedCategory.toLowerCase()}`}>
              {speedCategory === 'CRUISE' && 'Cruise'}
              {speedCategory === 'BOOST' && 'Boost Speed'}
              {speedCategory === 'HYPER' && 'Hyperlapse Mode'}
            </div>
          </div>

          {/* HUD Bottom Info & Controls Strip */}
          <div className="drone-hud-bottom">
            {/* Dynamic Location Callout */}
            <div className="hud-location-block">
              <div className="hud-location-tag">
                <FaMapMarkerAlt />
                <span>Sector {activeChapterIndex + 1} of {CHAPTERS.length} · Nairobi Campus</span>
              </div>
              <h3 className="hud-location-title">{activeChap.title}</h3>
              <p className="hud-location-desc">{activeChap.desc}</p>
            </div>

            {/* Quick Glassmorphic Controls Bar */}
            <div className="drone-controls-strip">
              <button 
                className="drone-ctrl-btn" 
                onClick={togglePlayPause} 
                aria-label={isPlaying ? 'Pause' : 'Play'}
                title={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: '2px' }} />}
              </button>

              <button 
                className="drone-ctrl-btn" 
                onClick={toggleMute} 
                aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                title={isMuted ? 'Unmute Ambient Sound' : 'Mute Sound'}
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <button
                className={`drone-mode-switch ${pilotMode ? 'pilot-active' : ''}`}
                onClick={() => setPilotMode(!pilotMode)}
                title="Toggle Pilot Scroll-Scrub Mode"
              >
                <FaBolt />
                <span>{pilotMode ? 'Pilot Scrub Active' : 'Cruise Flow'}</span>
              </button>

              <button 
                className="drone-ctrl-btn" 
                onClick={toggleFullscreen} 
                aria-label="Fullscreen"
                title="Theater Fullscreen"
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive Progress Timeline ── */}
      <div 
        className="drone-timeline-bar" 
        onClick={handleTimelineSeek}
        title="Click to jump along the drone flight path"
      >
        <div 
          className="drone-timeline-progress" 
          style={{ width: `${progressPercent}%` }} 
        />
        {CHAPTERS.map((ch, idx) => (
          <div
            key={idx}
            className="drone-timeline-marker"
            style={{ left: `${(ch.time / duration) * 100}%` }}
            onClick={(e) => {
              e.stopPropagation();
              seekToChapter(ch);
            }}
            title={`${ch.title} (${ch.label})`}
          />
        ))}
      </div>

      {/* ── Chapter Selection Row ── */}
      <div className="drone-chapters-row" role="tablist" aria-label="Campus Tour Waypoints">
        {CHAPTERS.map((ch, idx) => (
          <button
            key={idx}
            className={`drone-chapter-pill ${idx === activeChapterIndex ? 'active' : ''}`}
            onClick={() => seekToChapter(ch)}
            role="tab"
            aria-selected={idx === activeChapterIndex}
          >
            <div className="chapter-pill-time">{ch.label} · {ch.altitude}</div>
            <div className="chapter-pill-title">{ch.title}</div>
            <div className="chapter-pill-sub">{ch.heading}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CinematicDroneExperience;
