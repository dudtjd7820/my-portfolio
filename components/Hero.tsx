import { Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        {/* 프로필 이미지 - public/profile.jpg 파일이 있으면 표시 */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 텍스트 정보 */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold mb-3">
            {profile.role}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
            6년+ 경력 • 풀스택 개발자
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl mb-8 font-medium">
        {profile.bio}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-md hover:shadow-lg font-semibold"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>GitHub</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg font-semibold"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
