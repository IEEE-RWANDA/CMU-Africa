import React from 'react';

const AnimatedBackground = ({ isDark }) => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Animated Blob 1 */}
            <div
                className="blob blob-1"
                style={{
                    position: 'absolute',
                    width: '70vmax',
                    height: '70vmax',
                    left: '-20vmin',
                    top: '-20vmin',
                    background: isDark
                        ? 'radial-gradient(circle, rgba(200, 16, 46, 0.20) 0%, rgba(212, 160, 23, 0.06) 100%)'
                        : 'radial-gradient(circle, rgba(200, 16, 46, 0.15) 0%, rgba(212, 160, 23, 0.10) 100%)',
                    animation: 'morph 15s ease-in-out infinite alternate, spin 20s linear infinite',
                    willChange: 'border-radius, transform',
                    transformOrigin: '30% 30%',
                    pointerEvents: 'none',
                    zIndex: 1,
                    filter: 'blur(40px)'
                }}
            />

            {/* Animated Blob 2 */}
            <div
                className="blob blob-2"
                style={{
                    position: 'absolute',
                    width: '70vmin',
                    height: '70vmin',
                    right: '-10vmin',
                    bottom: 0,
                    background: isDark
                        ? 'radial-gradient(circle, rgba(212, 160, 23, 0.12) 0%, rgba(200, 16, 46, 0.12) 100%)'
                        : 'radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, rgba(200, 16, 46, 0.10) 100%)',
                    animation: 'morph 10s ease-in-out infinite alternate, spin 26s linear infinite reverse',
                    willChange: 'border-radius, transform',
                    transformOrigin: '10% 10%',
                    pointerEvents: 'none',
                    zIndex: 1,
                    filter: 'blur(40px)'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
