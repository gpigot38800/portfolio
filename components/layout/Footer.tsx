export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/gpigot38800/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/geoffrey-pigot-35b446161/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:geoffreypigot@yahoo.com"
              className="text-gray-600 hover:text-accent transition-colors text-sm"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center">
            © {currentYear} - Portfolio
          </p>

          {/* Attribution */}
          <p className="text-xs text-gray-500 text-center">
            Construit avec Next.js + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
