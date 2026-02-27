export default function CvButton() {
  return (
    <a
      href="/cv/cv_geoffrey_pigot_FR.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 overflow-hidden border-2 border-accent-500 text-accent-700 hover:text-white hover:border-accent-600 bg-white hover:bg-accent-500 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    >
      <span className="relative z-10 flex items-center gap-2">
        Mon CV
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </span>
    </a>
  );
}
