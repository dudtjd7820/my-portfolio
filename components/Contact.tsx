import { Mail, Github } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Contact</h2>

      <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 mb-8 max-w-3xl leading-relaxed font-semibold">
        새로운 기회나 협업에 관심이 있으시다면 언제든지 연락 주세요.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 font-black text-xl justify-center overflow-hidden border-2 border-blue-500 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Mail className="w-7 h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10 drop-shadow-lg" />
          <span className="relative z-10 tracking-wide">✉️ 이메일 보내기</span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:bg-black dark:hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-gray-500/50 hover:scale-105 font-black text-xl justify-center overflow-hidden border-2 border-gray-700 dark:border-gray-300 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-gray-600/30 dark:from-gray-300/30 dark:to-gray-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Github className="w-7 h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10 drop-shadow-lg" />
          <span className="relative z-10 tracking-wide">🚀 GitHub 방문</span>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="group relative p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-3 border-blue-300 dark:border-blue-600 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Email</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">직접 연락하기</p>
            </div>
          </div>
          <p className="text-lg md:text-xl font-black text-gray-900 dark:text-white break-all leading-tight">
            {profile.email}
          </p>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border-3 border-gray-300 dark:border-gray-600 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Github className="w-7 h-7 text-white dark:text-gray-900" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">GitHub</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">프로필 방문하기</p>
            </div>
          </div>
          <p className="text-lg md:text-xl font-black text-gray-900 dark:text-white">
            github.com/kim-yeongseong
          </p>
        </a>
      </div>
    </section>
  );
}
