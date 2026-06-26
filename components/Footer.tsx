export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[#374151]">
          © 2026 Akashkumar Vanzara. All rights reserved.
        </p>
        <p className="font-mono text-xs text-[#374151]">
          Built with <span className="text-[#00ff88]">Next.js</span> &{" "}
          <span className="text-[#a78bfa]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
