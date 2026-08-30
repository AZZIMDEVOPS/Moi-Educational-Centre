import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { FaStar, FaBookOpen, FaPen } from 'react-icons/fa';
import '../../css/virtual-classroom.css';

const boardItems = {
  lesson: {
    title: 'Live Lesson',
    subtitle: 'Mathematics in motion',
    lines: [
      'Interactive problem solving with AI guidance.',
      'Students collaborate in real time across every device.',
      'Every insight is captured into a personal learning path.',
    ],
  },
  ai: {
    title: 'AI Tutor',
    subtitle: 'Personal guidance for every learner',
    lines: [
      'Adaptive prompts and instant reflections for growth.',
      'Learning is tailored to pace, confidence, and curiosity.',
      'Progress is visible and celebrated at every step.',
    ],
  },
  assignments: {
    title: 'Assignments',
    subtitle: 'Thoughtful tasks with momentum',
    lines: [
      'Flexible submission flow for students and teachers.',
      'Feedback is immediate, clear and encouraging.',
      'The classroom feels organized, warm and focused.',
    ],
  },
  progress: {
    title: 'Class Progress',
    subtitle: 'Momentum across learning goals',
    lines: [
      'Attendance, participation and mastery stay visible.',
      'Teachers can guide the next best move with confidence.',
      'MEC creates an experience that feels modern and deeply human.',
    ],
  },
};

const deskProfiles = [
  {
    id: 'maya',
    name: 'Maya N.',
    subject: 'Physics Lab',
    progress: '94%',
    state: 'Focus mode',
    initials: 'MN',
  },
  {
    id: 'daniel',
    name: 'Daniel O.',
    subject: 'English Debate',
    progress: '91%',
    state: 'Collaborating',
    initials: 'DO',
  },
  {
    id: 'aisha',
    name: 'Aisha K.',
    subject: 'Creative Coding',
    progress: '97%',
    state: 'Leading',
    initials: 'AK',
  },
];

const controlItems = [
  { label: 'Attendance', value: '98%', accent: 'violet' },
  { label: 'Assignments', value: '12', accent: 'blue' },
  { label: 'Video Call', value: 'Live', accent: 'teal' },
  { label: 'Homework', value: '3', accent: 'gold' },
];

const VirtualClassroom = () => {
  const [tab, setTab] = useState('lesson');
  const [displayLines, setDisplayLines] = useState(boardItems.lesson.lines.map(() => ''));
  const [activeDesk, setActiveDesk] = useState(deskProfiles[0]);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });
  const boardRefs = useRef([]);
  const sceneRef = useRef(null);

  const activeBoard = useMemo(() => boardItems[tab], [tab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .from('.vc-hero-copy', { y: 22, opacity: 0, duration: 0.75 })
        .from('.vc-scene-card', { y: 24, opacity: 0, stagger: 0.1, duration: 0.7 }, '-=0.45')
        .from('.vc-float', { y: 20, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.4');
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (boardRefs.current.length > 0) {
      const clear = gsap.fromTo(
        boardRefs.current,
        { x: -16, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out' },
      );
      return () => clear && clear.kill && clear.kill();
    }
    return undefined;
  }, [tab]);

  useEffect(() => {
    setDisplayLines(activeBoard.lines.map(() => ''));
    const timers = [];
    let typingDelay = 180;

    activeBoard.lines.forEach((line, lineIndex) => {
      for (let i = 1; i <= line.length; i += 1) {
        timers.push(
          window.setTimeout(() => {
            setDisplayLines((prev) => {
              const next = [...prev];
              next[lineIndex] = line.slice(0, i);
              return next;
            });
          }, typingDelay + i * 30),
        );
      }
      typingDelay += line.length * 30 + 140;
    });

    return () => timers.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [activeBoard]);

  const handlePointerMove = (event) => {
    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setPointerOffset({ x: x * 8, y: y * 8 });
  };

  const sceneStyle = {
    transform: `perspective(1200px) rotateY(${pointerOffset.x * 0.08}deg) rotateX(${pointerOffset.y * -0.08}deg)`,
  };

  return (
    <section className="virtual-classroom" id="virtual-classroom" ref={sceneRef}>
      <div className="vc-hero-copy">
        <span className="vc-eyebrow">MEC VIRTUAL CLASSROOM</span>
        <h2>Step into an immersive learning studio.</h2>
        <p>
          Discover a premium digital classroom designed for live lessons, vibrant collaboration and future-ready learning.
        </p>
        <div className="vc-hero-actions">
          <Link to="/contact" className="vc-cta">Enter Live Classroom</Link>
          <span className="vc-pill">Live lesson • 03:20</span>
        </div>
      </div>

      <div className="vc-scene" onMouseMove={handlePointerMove} onMouseLeave={() => setPointerOffset({ x: 0, y: 0 })}>
        <div className="vc-sunlight" aria-hidden="true" />
        <div className="vc-room-glow" aria-hidden="true" />
        <div className="vc-window-wall">
          <div className="vc-window vc-scene-card">
            <span className="vc-window-label">Natural light</span>
            <strong>Bright learning spaces</strong>
            <p>Sunlit walls, calm depth and a welcoming environment.</p>
          </div>
          <div className="vc-window vc-scene-card">
            <span className="vc-window-label">Connected learning</span>
            <strong>Live collaboration</strong>
            <p>Students and teachers meet in a refined digital experience.</p>
          </div>
        </div>

        <Motion.div className="vc-smart-board vc-scene-card" style={sceneStyle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="vc-board-top">
            <div>
              <p className="vc-subtitle">Smart board</p>
              <h3>{activeBoard.title}</h3>
            </div>
            <span className="vc-board-badge">AI-enhanced</span>
          </div>

          <div className="vc-board-display">
            <div className="vc-board-main">
              <p className="vc-board-caption">{activeBoard.subtitle}</p>
              <div className="vc-board-lines">
                {activeBoard.lines.map((_, index) => (
                  <div
                    key={index}
                    ref={(el) => (boardRefs.current[index] = el)}
                    className={`vc-board-line ${displayLines[index] ? 'visible' : ''}`}
                  >
                    {displayLines[index]}
                  </div>
                ))}
              </div>
            </div>
            <div className="vc-board-side">
              <div className="vc-side-pill">Video lesson</div>
              <div className="vc-side-pill">Slides</div>
              <div className="vc-side-pill">Annotations</div>
            </div>
          </div>

          <div className="vc-pin-row">
            {Object.keys(boardItems).map((key) => (
              <button
                key={key}
                type="button"
                className={`vc-pin ${tab === key ? 'active' : ''}`}
                onClick={() => setTab(key)}
              >
                {boardItems[key].title}
              </button>
            ))}
          </div>
        </Motion.div>

        <div className="vc-desk-area">
          {deskProfiles.map((desk) => (
            <Motion.button
              key={desk.id}
              type="button"
              className={`vc-desk vc-scene-card ${activeDesk.id === desk.id ? 'active-desk' : ''}`}
              onClick={() => setActiveDesk(desk)}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <div className="vc-desk-top">
                <span className="vc-avatar">{desk.initials}</span>
                <span className="vc-desk-state">{desk.state}</span>
              </div>
              <div className="vc-desk-body">
                <strong>{desk.name}</strong>
                <p>{desk.subject}</p>
              </div>
              <div className="vc-desk-foot">
                <span>Progress</span>
                <strong>{desk.progress}</strong>
              </div>
            </Motion.button>
          ))}

          <Motion.div className="vc-teacher-desk vc-scene-card" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div>
              <p className="vc-subtitle">Teacher station</p>
              <h3>Guided, warm and inspiring</h3>
            </div>
            <p>Every lesson blends strong pedagogy, live collaboration and purposeful technology.</p>
            <Link to="/contact" className="vc-teacher-link">Book a classroom tour</Link>
          </Motion.div>
        </div>

        <Motion.aside className="vc-control-panel vc-scene-card" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="vc-panel-head">
            <p className="vc-subtitle">Today</p>
            <h3>Class overview</h3>
          </div>
          <div className="vc-control-grid">
            {controlItems.map((item) => (
              <div key={item.label} className={`vc-control-card ${item.accent}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="vc-live-preview">
            <p className="vc-subtitle">Selected student</p>
            <h4>{activeDesk.name}</h4>
            <p>{activeDesk.subject}</p>
            <div className="vc-progress-row">
              <span>Learning momentum</span>
              <strong>{activeDesk.progress}</strong>
            </div>
          </div>
        </Motion.aside>

        <Motion.div className="vc-float vc-float-book" animate={{ y: [0, -8, 0], rotate: [0, -1, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}>
          <span><FaStar size={14} color="#f59e0b" /></span>
        </Motion.div>
        <Motion.div className="vc-float vc-float-notebook" animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}>
          <span><FaBookOpen size={14} color="#38bdf8" /></span>
        </Motion.div>
        <Motion.div className="vc-float vc-float-pen" animate={{ y: [0, -9, 0], rotate: [0, 8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}>
          <span><FaPen size={14} color="#a855f7" /></span>
        </Motion.div>
      </div>
    </section>
  );
};

export default VirtualClassroom;
