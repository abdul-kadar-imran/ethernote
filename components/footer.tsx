import { motion } from 'motion/react';

// Royal blue accent: #4169E1 → rgb(65,105,225)
const A = '65,105,225';
const AC = `rgba(${A},`;

/* ── shared position helpers ── */
const abs: React.CSSProperties = { position: 'absolute' };
const absFull: React.CSSProperties = { ...abs, top: 0, left: 0, right: 0 };
const absBottom: React.CSSProperties = { ...abs, bottom: 0, left: 0, right: 0 };
const absCenter: React.CSSProperties = { ...abs, bottom: 0, left: '50%', transform: 'translateX(-50%)' };
const noMouse: React.CSSProperties = { pointerEvents: 'none' };
const flexCenter: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

export default function Footer() {
    return (
        <footer className="site-footer" style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
        }}>
            {/* ── Main pill container ── */}
            <div style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                borderRadius: '32px',
                background: 'linear-gradient(160deg, rgba(7,9,16,0.97) 0%, rgba(5,7,15,0.99) 60%, rgba(3,5,12,1) 100%)',
                border: `1px solid ${AC}0.18)`,
                boxShadow: `0 0 0 1px ${AC}0.06), 0 0 80px ${AC}0.07), 0 12px 48px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.02)`,
            }}>
                {/* Top glow line */}
                <div style={{
                    ...absFull,
                    height: '1px',
                    ...noMouse,
                    zIndex: 10,
                    background: `linear-gradient(90deg, transparent 0%, ${AC}0.12) 18%, ${AC}0.55) 50%, ${AC}0.12) 82%, transparent 100%)`,
                }} />

                {/* Bottom glow line */}
                <div style={{
                    ...absBottom,
                    height: '1px',
                    ...noMouse,
                    zIndex: 10,
                    background: `linear-gradient(90deg, transparent 0%, ${AC}0.06) 25%, ${AC}0.25) 50%, ${AC}0.06) 75%, transparent 100%)`,
                }} />

                {/* Dot grid — bottom strip only */}
                <div style={{
                    ...absBottom,
                    ...noMouse,
                    height: '30px',
                    backgroundImage: `radial-gradient(circle, ${AC}0.28) 1px, transparent 1px)`,
                    backgroundSize: '14px 14px',
                    backgroundPosition: '7px 4px',
                    opacity: 0.55,
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                }} />

                {/* Wide ambient glow */}
                <div style={{
                    ...absCenter,
                    ...noMouse,
                    width: '380px',
                    height: '55px',
                    background: `radial-gradient(ellipse at 50% 100%, ${AC}0.30) 0%, ${AC}0.08) 50%, transparent 72%)`,
                    filter: 'blur(8px)',
                }} />

                {/* Mid bright column */}
                <div style={{
                    ...absCenter,
                    ...noMouse,
                    width: '120px',
                    height: '36px',
                    background: `radial-gradient(ellipse at 50% 100%, rgba(120,160,255,0.8) 0%, ${AC}0.45) 45%, transparent 72%)`,
                    filter: 'blur(4px)',
                }} />

                {/* Super-bright core flare — pulsing */}
                <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        ...absCenter,
                        ...noMouse,
                        width: '38px',
                        height: '16px',
                        background: `radial-gradient(ellipse at 50% 100%, rgba(180,210,255,1) 0%, rgba(100,140,240,0.9) 45%, transparent 80%)`,
                        filter: 'blur(2px)',
                    }}
                />

                {/* Curved neon arc */}
                <svg
                    width="300" height="32" viewBox="0 0 300 32"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ ...absCenter, ...noMouse, zIndex: 5 }}
                >
                    <defs>
                        <linearGradient id="arcGradBlue" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor={`${AC}0)`} />
                            <stop offset="25%" stopColor={`${AC}0.40)`} />
                            <stop offset="50%" stopColor="rgba(160,190,255,1)" />
                            <stop offset="75%" stopColor={`${AC}0.40)`} />
                            <stop offset="100%" stopColor={`${AC}0)`} />
                        </linearGradient>
                    </defs>
                    {/* Soft blurred backing arc */}
                    <path d="M 0 32 Q 150 -2 300 32" stroke={`${AC}0.30)`} strokeWidth="5"
                        fill="none" strokeLinecap="round" style={{ filter: 'blur(3px)' }} />
                    {/* Sharp arc */}
                    <path d="M 0 32 Q 150 -2 300 32" stroke="url(#arcGradBlue)" strokeWidth="1.5"
                        fill="none" strokeLinecap="round" />
                </svg>

                {/* ── Main content row ── */}
                <div className="footer-content" style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 6,
                }}>
                    {/* ══ LEFT: Logo · separator · name ══ */}
                    <div className="footer-left" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>

                        {/* Logo circle */}
                        <motion.a
                            href="https://imran-desktop.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit My Portfolio"
                            animate={{
                                boxShadow: [
                                    `0 0 0 1px ${AC}0.50), 0 0 18px ${AC}0.25), 0 0 40px ${AC}0.12), inset 0 0 18px ${AC}0.06)`,
                                    `0 0 0 1px ${AC}0.80), 0 0 28px ${AC}0.50), 0 0 60px ${AC}0.30), inset 0 0 22px ${AC}0.10)`,
                                    `0 0 0 1px ${AC}0.50), 0 0 18px ${AC}0.25), 0 0 40px ${AC}0.12), inset 0 0 18px ${AC}0.06)`,
                                ],
                            }}
                            whileHover={{
                                scale: 1.08,
                                rotate: 8,
                                boxShadow: `0 0 0 1.5px ${AC}0.95), 0 0 35px ${AC}0.65), 0 0 75px ${AC}0.38), inset 0 0 24px ${AC}0.14)`,
                            }}
                            whileTap={{ scale: 0.94 }}
                            transition={{
                                boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                                type: "spring", stiffness: 300, damping: 18,
                            }}
                            className="footer-logo-circle"
                            style={{
                                position: 'relative',
                                ...flexCenter,
                                flexShrink: 0,
                                borderRadius: '50%',
                                background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.08) 0%, ${AC}0.10) 18%, rgba(4,6,14,0.98) 72%)`,
                                border: `1px solid ${AC}0.22)`,
                                userSelect: 'none',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Outer Glow */}
                            <motion.div
                                animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.18, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, rgba(65,105,225,0.50) 0%, transparent 72%)`,
                                    filter: 'blur(40px)',
                                }}
                            />

                            {/* Inner Ring */}
                            <div style={{
                                position: 'absolute',
                                borderRadius: '50%',
                                inset: '5px',
                                border: `1px solid ${AC}0.28)`,
                            }} />

                            {/* Portfolio Initial */}
                            <span style={{
                                position: 'relative',
                                zIndex: 10,
                                fontFamily: "'Cinzel', serif",
                                fontSize: '22px',
                                fontWeight: 700,
                                color: 'rgba(180,210,255,0.96)',
                                textShadow: `0 0 12px ${AC}0.9), 0 0 28px ${AC}0.50)`,
                                lineHeight: 1,
                                transition: 'all 0.3s ease',
                            }}>
                                I
                            </span>
                        </motion.a>

                        {/* Separator */}
                        <div className="footer-sep-left" style={{
                            width: '1px',
                            flexShrink: 0,
                            background: `linear-gradient(to bottom, transparent 0%, ${AC}0.28) 28%, ${AC}0.28) 72%, transparent 100%)`,
                        }} />

                        {/* Name block */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '4px',
                            userSelect: 'none',
                        }}>
                            <span className="footer-subtitle" style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                letterSpacing: '0.44em',
                                color: 'rgba(150,170,210,0.65)',
                                textTransform: 'uppercase',
                                lineHeight: 1,
                            }}>
                                Abdul Kadar
                            </span>
                            <span className="footer-title" style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 700,
                                letterSpacing: '0.28em',
                                color: '#4169E1',
                                textTransform: 'uppercase',
                                lineHeight: 1,
                                textShadow: `0 0 8px ${AC}0.60), 0 0 20px ${AC}0.35), 0 0 36px ${AC}0.16)`,
                            }}>
                                IMRAN
                            </span>
                        </div>
                    </div>

                    {/* ══ CENTER: Tagline (absolute center) ══ */}
                    <div className="footer-tagline" style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '14px',
                        width: '100%',
                        maxWidth: '420px',
                        userSelect: 'none',
                    }}>
                        {['D e s i g n', 'D e v e l o p', 'D e p l o y'].map((word, i) => (
                            <span key={word} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontSize: '11.5px',
                                    fontWeight: 400,
                                    letterSpacing: '0.05em',
                                    color: 'rgba(255, 255, 255, 1)',
                                }}>
                                    {word}
                                </span>
                                {i < 2 && (
                                    <span style={{ color: `${AC}0.65)`, fontSize: '12px', lineHeight: 1 }}>•</span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* ══ RIGHT: separator · globe button ══ */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>

                        {/* Separator */}
                        <div className="footer-sep-right" style={{
                            width: '1px',
                            height: '44px',
                            flexShrink: 0,
                            background: `linear-gradient(to bottom, transparent 0%, ${AC}0.28) 28%, ${AC}0.28) 72%, transparent 100%)`,
                        }} />

                        {/* Portfolio globe button */}
                        <motion.a
                            href="https://imran-desktop.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            animate={{
                                boxShadow: [
                                    `0 0 0 1.5px ${AC}0.60), 0 0 18px ${AC}0.25), 0 0 40px ${AC}0.12)`,
                                    `0 0 0 1.5px ${AC}0.85), 0 0 28px ${AC}0.50), 0 0 60px ${AC}0.25)`,
                                    `0 0 0 1.5px ${AC}0.60), 0 0 18px ${AC}0.25), 0 0 40px ${AC}0.12)`,
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{
                                scale: 1.08,
                                rotate: -6,
                                boxShadow: `0 0 0 1.5px ${AC}0.95), 0 0 36px ${AC}0.60), 0 0 72px ${AC}0.32)`,
                            }}
                            whileTap={{ scale: 0.94 }}
                            title="Visit My Portfolio"
                            className="footer-globe-btn"
                            style={{
                                position: 'relative',
                                ...flexCenter,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                background: `radial-gradient(circle at 36% 30%, ${AC}0.10) 0%, rgba(4,6,14,0.97) 68%)`,
                                border: `1px solid ${AC}0.22)`,
                                textDecoration: 'none',
                            }}
                        >
                            {/* Pulsing Glow */}
                            <motion.div
                                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.6, 0.25] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, rgba(65,105,225,.50) 0%, transparent 70%)`,
                                    filter: 'blur(16px)',
                                }}
                            />

                            {/* Globe Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4169E1"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ width: '20px', height: '20px', position: 'relative', zIndex: 10 }}
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18" />
                                <path d="M12 3a15 15 0 0 1 0 18" />
                                <path d="M12 3a15 15 0 0 0 0 18" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
