import React from 'react';

// Circuit traces (viewBox 300 x 600). The right-hand copy is a mirrored duplicate.
const TRACES = [
    { d: 'M0 140 H70 L110 180 V300 L140 330 H220', node: [220, 330], delay: '0s' },
    { d: 'M0 420 H50 L90 380 H170 L200 410 V500', node: [200, 500], delay: '2.4s' },
    { d: 'M0 260 H30 L60 230 V80', node: [60, 80], delay: '4.2s' },
];

const Traces = ({ className = '' }) => (
    <svg
        viewBox="0 0 300 600"
        preserveAspectRatio="xMinYMid meet"
        aria-hidden="true"
        className={`absolute top-0 hidden h-full w-[30%] fill-none md:block ${className}`}
    >
        {TRACES.map(({ d, node, delay }) => (
            <g key={d}>
                <path d={d} className="stroke-brand/20" strokeWidth="1.5" />
                <path d={d} pathLength="100" className="trace-pulse stroke-brand" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: delay }} />
                <circle cx={node[0]} cy={node[1]} r="4" className="trace-node fill-brand" style={{ animationDelay: delay }} />
            </g>
        ))}
    </svg>
);

const TechBackground = ({ isDark }) => {
    const line = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(200, 16, 46, 0.08)';
    const mask = 'radial-gradient(ellipse at center, black 25%, transparent 75%)';

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* faint engineering grid, faded toward the edges */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
                    backgroundSize: '56px 56px',
                    WebkitMaskImage: mask,
                    maskImage: mask,
                }}
            />
            <Traces className="left-0" />
            <Traces className="right-0 -scale-x-100" />
        </div>
    );
};

export default TechBackground;
