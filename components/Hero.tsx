import { Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {profile.name}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-3">
          {profile.role}
        </p>
        <p className="text-lg text-gray-600">
          6년 2개월 경력 • 풀스택 개발자
        </p>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
        {profile.bio}
      </p>

      <div className="flex gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
