import React from 'react';

// --- ICONS (Inline for stability) ---
const Icon = ({ path, size = 24, className = '' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {path}
    </svg>
);

export const Icons = {
    Menu: (props) => <Icon {...props} path={<><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>} />,
    X: (props) => <Icon {...props} path={<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>} />,
    Instagram: (props) => <Icon {...props} path={<><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>} />,
    Facebook: (props) => <Icon {...props} path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} />,
    Twitter: (props) => <Icon {...props} path={<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S1.2 2.9 8.3 9c-3.1-.1-7-1.3-8-4 0 0 2.4.9 3.2.3.9-3 4-7 4-7z" />} />,
    Linkedin: (props) => <Icon {...props} path={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>} />,
    Camera: (props) => <Icon {...props} path={<><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></>} />,
    ArrowRight: (props) => <Icon {...props} path={<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>} />,
    ChevronRight: (props) => <Icon {...props} path={<path d="m9 18 6-6-6-6" />} />,
    ChevronLeft: (props) => <Icon {...props} path={<path d="m15 18-6-6 6-6" />} />,
    Clock: (props) => <Icon {...props} path={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>} />,
    Maximize2: (props) => <Icon {...props} path={<><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></>} />,
    Sun: (props) => <Icon {...props} path={<><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></>} />,
    Moon: (props) => <Icon {...props} path={<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />} />,
    Globe: (props) => <Icon {...props} path={<><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>} />,
    MapPin: (props) => <Icon {...props} path={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>} />,
    Mail: (props) => <Icon {...props} path={<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>} />,
    Send: (props) => <Icon {...props} path={<><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>} />,
};
