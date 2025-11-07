export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6 sm:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} 김영성. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
