import { SiYoutube, SiGithub, SiTwitter, SiDiscord } from "react-icons/si";
import useTheme from "./useTheme.ts";
import { HiMiniMoon, HiSun } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
      <div className="mx-auto w-full max-w-3xl space-y-20">
        <div className="flex justify-between">
          <div className="flex flex-1 items-center justify-start">
            <Link
              to="/"
              className="inline-flex h-10 items-center justify-center text-2xl font-bold text-slate-900 dark:text-white"
            >
              HK<span className="italic text-blue-800">ui</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <nav className="flex items-center space-x-1">
              <ThemeToggler />
              <a
                href="https://www.youtube.com/channel/UC4aSXpTw09MS6mH55job4cQ"
                className="h-10 p-2 text-slate-950 dark:text-white dark:hover:text-[#ff0000] hover:text-[#ff0000] w-10"
                target="_blank"
              >
                <SiYoutube className="h-full w-full" />
              </a>

              <a
                href="https://github.com/ho-ssain/hk-ui"
                className="h-10 p-2 text-slate-950 hover:text-indigo-800 w-10 dark:text-white dark:hover:text-indigo-800"
                target="_blank"
              >
                <SiGithub className="h-full w-full" />
              </a>

              <a
                href="https://twitter.com/awarehossain"
                className="h-10 p-2 text-slate-950 hover:text-sky-500 w-10 dark:text-white dark:hover:text-sky-500"
                target="_blank"
              >
                <SiTwitter className="h-full w-full" />
              </a>

              <a
                href="/"
                className="h-10 p-2 text-slate-950 hover:text-[#5865f2] w-10 dark:text-white dark:hover:text-[#5865f2]"
                target="_blank"
              >
                <SiDiscord className="h-full w-full" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const ThemeToggler = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  console.log("🚀 ~ ThemeToggler ~ isDarkMode:", isDarkMode);

  return (
    <button
      className="h-10 w-10 p-2 text-gray-800 hover:text-amber-500 dark:text-white dark:hover:text-amber-300 border rounded-s-full"
      onClick={() => toggleDarkMode()}
    >
      {isDarkMode ? (
        <HiSun className="h-full w-full" />
      ) : (
        <HiMiniMoon className="h-full w-full" />
      )}
    </button>
  );
};
