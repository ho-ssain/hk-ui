import Navbar from "./Navbar";
import logo from "/hk-ui-sm.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-900">
      <header className="w-full border-b bg-white sticky top-0 z-50 dark:border-zinc-700 dark:bg-zinc-950">
        <Navbar />
      </header>

      <main className="p-10 sm:px-16 lg:px-44">
        <article className="mx-auto max-w-3xl space-y-20">{children}</article>
      </main>

      <footer className="w-full border-t bg-white mt-10 mb-4">
        <div className="flex h-20 items-center px-10 sm:px-16 lg:px-44">
          <div className="w-full flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="w-8 h-8 mb-3" />
            <p className="italic">
              Copyright ©2024 by&nbsp;
              <a href="/" className="italic font-medium">
                HK<span className="italic text-blue-800">ui</span>
              </a>
              , All Rights reserved.
            </p>
            <p className="mb-3">
              <span className="italic"> Developed by-: </span>
              <a
                href="https://ho-ssain.vercel.app/"
                className="text-blue-950 font-bold underline"
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
