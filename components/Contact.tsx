"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    handle: "@AkashkumarVanzara",
    href: "https://github.com/AkashkumarVanzara",
    color: "hover:border-[#00ff88]/30 hover:text-[#00ff88]",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "u2524845@gmail.com",
    href: "mailto:akashvanzara0911@gmail.com",
    color: "hover:border-[#a78bfa]/30 hover:text-[#a78bfa]",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    handle: "akashkumarvanzara",
    href: "https://www.linkedin.com/in/akashkumarvanzara",
    color: "hover:border-[#00ff88]/30 hover:text-[#00ff88]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f0f1a]/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-[#00ff88] mb-3">04. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-4">
            Let&apos;s Build Something.
          </h2>
          <p className="text-[#64748b] text-base max-w-md mx-auto mb-12 leading-relaxed">
            Open to collaborations, freelance work, and interesting conversations. Reach out through any of the links below.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map(({ icon: Icon, label, handle, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex items-center gap-3 px-5 py-4 rounded-lg border border-[#1e1e2e] bg-[#0a0a0f] text-[#64748b] transition-all duration-300 w-full sm:w-auto ${color}`}
            >
              <Icon size={18} className="shrink-0" />
              <div className="text-left">
                <p className="font-mono text-xs text-[#64748b] uppercase tracking-widest">{label}</p>
                <p className="font-mono text-sm mt-0.5">{handle}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
