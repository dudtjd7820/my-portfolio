import { Mail, Github } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h2>

      <p className="text-base text-gray-700 mb-6 max-w-2xl leading-relaxed">
        새로운 기회나 협업에 관심이 있으시다면 언제든지 연락 주세요.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors justify-center"
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors justify-center"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
