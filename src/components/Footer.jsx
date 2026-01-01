import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-900 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Kollu Radha Krishna. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
