import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import prakash from "../../public/Prakash_p (2).pdf"; // adjust path if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  const sections = ["home", "about", "projects", "skills", "contact"];

  // Detect active section on scroll (more robust)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sec);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // sections is static

  // Prevent body scroll when menu is open
  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // Handle keyboard accessibility (Esc to close, Tab trapping)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!menuOpen) return;
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        // shift + tab
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // When opening menu, focus first focusable element
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex="0"]'
      );
      if (focusable.length) focusable[0].focus();
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((p) => !p);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top bar with glass effect */}
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/6 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            aria-label="Prakash - Home"
          >
            Prakash
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className={`relative text-sm lg:text-base capitalize transition-colors duration-200 px-1 py-1 ${
                  activeSection === s
                    ? "text-cyan-300 font-medium"
                    : "text-gray-300 hover:text-cyan-300"
                }`}
              >
                {s}
                {activeSection === s && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full" />
                )}
              </a>
            ))}

            <a
              href={prakash}
              download
              className="ml-2 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow hover:opacity-95 transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              {menuOpen ? (
                <FaTimes className="text-cyan-300" size={22} />
              ) : (
                <FaBars className="text-cyan-300" size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: slide-from-left panel + backdrop */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-40 flex ${
          menuOpen ? "" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sliding panel */}
        <aside
          ref={menuRef}
          className={`relative z-50 w-[78%] max-w-xs h-full bg-gradient-to-b from-black/85 to-black/80 text-gray-100 p-6 transform shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header inside panel */}
          <div className="flex items-center justify-between mb-6">
            <a
              href="#home"
              onClick={handleNavClick}
              className="text-lg font-semibold text-gray-100"
            >
              Prakash
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <FaTimes />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {sections.map((s, idx) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={handleNavClick}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  activeSection === s
                    ? "bg-white/5 text-cyan-300"
                    : "text-gray-200 hover:bg-white/3 hover:text-cyan-300"
                }`}
                tabIndex={menuOpen ? 0 : -1}
                ref={idx === 0 ? firstFocusableRef : undefined}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </nav>

          {/* Resume CTA */}
          <div className="mt-6">
            <a
              href={prakash}
              download
              onClick={handleNavClick}
              className="inline-block w-full text-center px-4 py-2 rounded-md bg-cyan-400 text-black font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              tabIndex={menuOpen ? 0 : -1}
              ref={lastFocusableRef}
            >
              Download Resume
            </a>
          </div>

          {/* Optional social links (uncomment & add hrefs) */}
          <div className="mt-6 flex gap-4" aria-hidden="false">
            {/* <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a> */}
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
