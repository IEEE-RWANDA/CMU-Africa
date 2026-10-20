import React from 'react';

const Footer = ({ theme }) => {
    return (
        <footer className={`py-12 border-t ${theme.border} mt-12`}>
            <div className="container mx-auto px-6 text-center">
                <p className={`text-xs ${theme.textMuted}`}>
                    &copy; 2026 IEEE CS SBC CMU-Africa &middot; Carnegie Mellon University Africa, Kigali, Rwanda
                </p>
            </div>
        </footer>
    );
};

export default Footer;
