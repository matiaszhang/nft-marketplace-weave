// Preloader.js
import React from 'react';

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-zinc-300 z-50">
            <h3>calling database, pls wait..</h3>
            <div className="animate-spin rounded-full border-t-4 border-fuchsia-900 border-opacity-75 h-12 w-12">
            </div>
        </div>
    );
};

export default Preloader;
