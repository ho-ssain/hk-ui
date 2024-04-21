import Navbar from "./Navbar";
import { BiSolidComponent } from "react-icons/bi";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-900">
      <header className="w-full border-b bg-zinc-100 sticky top-0 z-50 dark:border-zinc-700 dark:bg-zinc-950">
        <Navbar />
      </header>

      <main className="p-10 sm:px-16 lg:px-44 min-h-screen">
        <article className="mx-auto max-w-3xl space-y-20">{children}</article>
      </main>

      <footer className="w-full border-t bg-zinc-100 mt-10 dark:bg-zinc-950">
        <div className="flex h-24 items-center px-5 sm:px-16 lg:px-44">
          <div
            className="w-full flex flex-col justify-center items-center
          pb-2 "
          >
            <BiSolidComponent className="w-8 h-8 mb-3 dark:text-white" />
            <p className="italic dark:text-white">
              Copyright ©2024 by&nbsp;
              <a href="/" className="italic font-medium">
                HK
                <span className="italic text-blue-800 dark:text-blue-600">
                  ui
                </span>
              </a>
              , All Rights reserved.
            </p>
            <p className="dark:text-white pb-4">
              <span className="italic"> Developed by-: </span>
              <a
                href="https://ho-ssain.vercel.app/"
                className="text-blue-950 font-bold underline dark:text-blue-600"
                target="_blank"
              >
                Hossain K.M.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
