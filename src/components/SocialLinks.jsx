import { Github, Linkedin } from "lucide-react";

const links = [
  {
    href: "https://github.com/kolluswamyprasad",
    label: "GitHub",
    icon: Github,
    color: "hover:shadow-[0_0_16px_4px_#6366F1]"
  },
  {
    href: "https://linkedin.com/in/kolluswamyprasad",
    label: "LinkedIn",
    icon: Linkedin,
    color: "hover:shadow-[0_0_16px_4px_#10B981]"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      {links.map(({ href, label, icon: Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`rounded-full p-3 bg-midnight border border-slate-700 text-slate-200 transition-all duration-200 ${color}`}
        >
          <Icon size={28} />
        </a>
      ))}
    </div>
  );
}
