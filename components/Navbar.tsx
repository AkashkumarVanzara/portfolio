"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GitHubIcon } from "./icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-bold text-[#00ff88] tracking-wider hover:opacity-80 transition-opacity"
        >
          AV<span className="text-[#7c3aed]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-mono text-[#64748b] hover:text-[#00ff88] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/AkashkumarVanzara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#1e1e2e] rounded-md text-sm font-mono text-[#64748b] hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-all duration-200"
          >
            <GitHubIcon size={15} />
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#64748b] hover:text-[#00ff88] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-b border-[#1e1e2e] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/AkashkumarVanzara"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#64748b] hover:text-[#00ff88] transition-colors flex items-center gap-2"
          >
            <GitHubIcon size={14} />
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
