import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  if (window.location.pathname.includes("navaz")) return;

  return (
    <header className="relative z-10 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between " dir="rtl">
        {/* Logo */}
        <a href="/" className="flex items-center self-center flex-1 justify-center md:flex-none">
          <div className="w-32 lg:w-40">
            <svg
              fill="none"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 142 28"
            >
              <path
                d="M14.04 2.25a4.08 4.08 0 0 0-5.8 0 4.15 4.15 0 0 0 0 5.84l5.8-5.84ZM8.26 8.1l-.01-.02L0 16.38V27.4h16.5V16.38L8.25 8.1Z"
                fill="#2CB34F"
              ></path>
              <path
                d="M79.75 11.47a6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.32.9 6.48 6.48 0 0 0-1.65 1.37 6.48 6.48 0 0 0-1.65-1.37 6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.31.9 6.66 6.66 0 0 0-3.3 5.77V27.5h3.3V17.24c0-1.84 1.48-3.33 3.3-3.33s3.31 1.49 3.31 3.33v9.15c0 .62.5 1.11 1.1 1.11h2.2V17.24a3.31 3.31 0 1 1 6.61 0v9.15c0 .62.5 1.11 1.1 1.11h2.21V17.24a6.66 6.66 0 0 0-3.3-5.77Zm58.94 0a6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.7 1.15l-.2.15-.18.13-.2.17c-.06.05-.13.1-.18.16l-.17.15a6.6 6.6 0 0 0-.33.35v.01a5.93 5.93 0 0 0-.4.5l-.26.4-.04.06c-.1.16-.18.32-.26.49l-.02.03a7.6 7.6 0 0 0-.24.57l-.17.5v.03c-.06.18-.1.36-.13.54l-.02.12a6.76 6.76 0 0 0-.06.44l-.02.15a6.15 6.15 0 0 0-.03.57V27.5h3.31V17.24a3.32 3.32 0 0 1 3.3-3.33c1.83 0 3.31 1.49 3.31 3.33v9.15c0 .62.5 1.11 1.1 1.11h2.2V17.24a6.67 6.67 0 0 0-3.3-5.77Zm-15.28-.61v10.26a3.32 3.32 0 0 1-3.3 3.33 3.32 3.32 0 0 1-3.31-3.33V10.86h-3.31v10.26a6.66 6.66 0 0 0 3.3 5.76 6.5 6.5 0 0 0 3.31.9 6.5 6.5 0 0 0 3.3-.9 6.66 6.66 0 0 0 3.31-5.76V10.86h-3.3Zm-73.55-.28a8.57 8.57 0 0 0-8.54 8.6c0 4.75 3.82 8.6 8.54 8.6 4.71 0 8.54-3.85 8.54-8.6s-3.83-8.6-8.54-8.6Zm3.52 12.44a4.57 4.57 0 0 1-3.53 1.43A4.58 4.58 0 0 1 46.32 23 5.57 5.57 0 0 1 45 19.1a5.3 5.3 0 0 1 1.34-3.74 4.53 4.53 0 0 1 3.5-1.45c1.46 0 2.64.48 3.54 1.45a5.43 5.43 0 0 1 1.32 3.83c0 1.6-.44 2.87-1.32 3.83Zm-17.3-11.55a6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.3.9V6.45h-3.31V27.5h3.3V17.24c0-1.84 1.49-3.33 3.31-3.33s3.3 1.49 3.3 3.33v9.15c0 .62.5 1.11 1.1 1.11h2.21V17.24a6.66 6.66 0 0 0-3.3-5.77Zm75.16-.37c-.4-.17-.8-.3-1.24-.39-3.42-.55-4.64 1.81-4.64 1.81v-1.66h-3.3V27.5h3.3V17.24c0-.23.03-.46.07-.67a3.38 3.38 0 0 1 .5-1.2c.12-.17.25-.34.4-.49a3.42 3.42 0 0 1 1.05-.71 3.36 3.36 0 0 1 1.29-.26 3.3 3.3 0 0 1 1.29.26c.2.08.38.19.56.3l1.85-2.75a6.46 6.46 0 0 0-1.13-.62ZM92.73 27.78c-2.4 0-4.35-.78-5.79-2.32-1.45-1.56-2.18-3.67-2.18-6.26 0-2.57.71-4.67 2.12-6.26a7.3 7.3 0 0 1 5.64-2.33c2.36 0 4.25.76 5.61 2.27 1.36 1.5 2.05 3.62 2.05 6.3v.63H88.18l.03.31c.1 1.44.58 2.6 1.41 3.47.84.86 1.93 1.3 3.24 1.3 1.01 0 1.87-.26 2.54-.75a9.47 9.47 0 0 0 2.03-2.4l2.77 1.55c-.45.74-.92 1.38-1.4 1.92a8.37 8.37 0 0 1-1.75 1.47c-.6.38-1.28.66-1.99.84a10 10 0 0 1-2.34.26Zm-.13-14.24c-.5 0-.96.08-1.4.23a4.07 4.07 0 0 0-1.2.67c-.37.28-.68.64-.94 1.04a4.88 4.88 0 0 0-.58 1.37l-.1.36h8.48l-.1-.36c-.57-2.2-1.97-3.31-4.16-3.31Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
        </a>
        {/* Menu Button */}
        <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden flex gap-x-1">
             <span className=" text-white">قائمة</span>
          <svg
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M2.25 5.25h19.5v1.5H2.25v-1.5zm0 6h19.5v1.5H2.25v-1.5zm.75 6h-.75v1.5h19.5v-1.5H3z"
              fill="rgb(255,255,255)"
              fillRule="evenodd"
            ></path>
          </svg>
     
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="/category/home"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            منزلية
          </a>
          <a
            href="/category/moving"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            نقل
          </a>
          <a
            href="/category/cleaning"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            تنظيف
          </a>
          <a
            href="/category/repair"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            تركيب وتصليح
          </a>
        </nav>

        {/* Right Side Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/help"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            مساعدة
          </a>
          <a
            href="/account"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            الحساب
          </a>
          <button className="text-white hover:text-green-400 font-medium transition-colors">
            تسجيل خروج
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
