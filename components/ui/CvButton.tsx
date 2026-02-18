'use client';

import { useState, useRef, useEffect } from 'react';

export default function CvButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    {
      label: '🇫🇷 Version française',
      href: '/cv/cv_geoffrey_pigot_FR.pdf',
      lang: 'FR',
    },
    {
      label: '🇬🇧 English version',
      href: '/cv/cv_geoffrey_pigot_EN.pdf',
      lang: 'EN',
    },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 overflow-hidden border-2 border-accent-500 text-accent-700 hover:text-white hover:border-accent-600 bg-white hover:bg-accent-500 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="relative z-10 flex items-center gap-2">
          Mon CV
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-scale-in">
          {options.map((opt) => (
            <a
              key={opt.lang}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150 font-medium text-sm"
            >
              <span className="text-base">{opt.label.split(' ')[0]}</span>
              <span>{opt.label.split(' ').slice(1).join(' ')}</span>
              <svg
                className="w-4 h-4 ml-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
