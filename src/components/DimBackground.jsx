import React from 'react';

const DimBackground = ({ isDark }) => {
    return (
        <>
            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translate(0px, 0px); }
                    50% { transform: translate(50px, -50px); }
                }
                @keyframes float-medium {
                    0%, 100% { transform: translate(0px, 0px); }
                    50% { transform: translate(-60px, 40px); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    50% { transform: translate(30px, 30px) scale(1.1); }
                }
                @keyframes mesh-move {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes fade-pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
            `}</style>

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                {/* Base Background Color */}
                <div
                    className={`absolute inset-0 transition-colors duration-1000 ${isDark ? 'bg-[#050505]' : 'bg-[#fafafa]'
                        }`}
                />

                {/* Animated Mesh Grid Pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: isDark
                            ? `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
                            : `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        animation: 'mesh-move 20s ease-in-out infinite',
                    }}
                />

                {/* Floating Orbs Container */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Orb 1: Top Left - Midnight Blue (Dark) vs Savannah Sky (Light) */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-5rem',
                            left: '-5rem',
                            width: '40rem',
                            height: '40rem',
                            borderRadius: '50%',
                            filter: 'blur(80px)',
                            animation: 'float-slow 18s ease-in-out infinite',
                            mixBlendMode: isDark ? 'screen' : 'multiply',
                            background: isDark
                                ? 'radial-gradient(circle, rgba(29, 78, 216, 0.5) 0%, rgba(0,0,0,0) 70%)'
                                : 'radial-gradient(circle, rgba(135, 206, 235, 0.5) 0%, rgba(255,255,255,0) 70%)',
                            transition: 'all 1000ms',
                        }}
                    />

                    {/* Orb 2: Bottom Right - Warm Earth (Dark) vs Dusty Sand (Light) */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            width: '50rem',
                            height: '50rem',
                            borderRadius: '50%',
                            filter: 'blur(100px)',
                            animation: 'float-medium 12s ease-in-out infinite',
                            mixBlendMode: isDark ? 'screen' : 'multiply',
                            background: isDark
                                ? 'radial-gradient(circle, rgba(60, 20, 20, 0.6) 0%, rgba(0,0,0,0) 70%)'
                                : 'radial-gradient(circle, rgba(210, 180, 140, 0.5) 0%, rgba(255,255,255,0) 70%)',
                            transition: 'all 1000ms',
                        }}
                    />

                    {/* Orb 3: Accent - Sunset Orange (Both, adjusted intensity) */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '30%',
                            left: '20%',
                            width: '30rem',
                            height: '30rem',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            animation: 'float-fast 8s ease-in-out infinite',
                            mixBlendMode: isDark ? 'screen' : 'multiply',
                            background: isDark
                                ? 'radial-gradient(circle, rgba(255, 77, 0, 0.4) 0%, rgba(0,0,0,0) 70%)'
                                : 'radial-gradient(circle, rgba(255, 160, 122, 0.4) 0%, rgba(255,255,255,0) 70%)',
                            transition: 'all 1000ms',
                        }}
                    />

                    {/* Additional Orb 4: Purple accent */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '60%',
                            right: '15%',
                            width: '35rem',
                            height: '35rem',
                            borderRadius: '50%',
                            filter: 'blur(90px)',
                            animation: 'float-medium 15s ease-in-out infinite',
                            mixBlendMode: isDark ? 'screen' : 'multiply',
                            background: isDark
                                ? 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, rgba(0,0,0,0) 70%)'
                                : 'radial-gradient(circle, rgba(196, 181, 253, 0.4) 0%, rgba(255,255,255,0) 70%)',
                            transition: 'all 1000ms',
                        }}
                    />
                </div>

                {/* Noise Texture Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        opacity: 0.05,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        animation: 'fade-pulse 10s ease-in-out infinite',
                    }}
                />

                {/* Radial gradient overlay for depth */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(5,5,5,0.4) 100%)'
                            : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(250,250,250,0.4) 100%)',
                    }}
                />
            </div>
        </>
    );
};

export default DimBackground;
