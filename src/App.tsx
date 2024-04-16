import { SiYoutube, SiGithub } from "react-icons/si";

function App() {
  return (
    <>
      <header className="w-full border-b bg-white">
        <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
          <div className="mx-auto w-full max-w-3xl space-y-20">
            <div className="flex justify-between">
              <div className="flex flex-1 items-center justify-start">
                <a
                  href="/"
                  className="inline-flex h-10 items-center justify-center text-lg font-bold text-slate-900"
                >
                  HK<span className="italic text-blue-800">ui</span>
                </a>
              </div>

              <div className="flex flex-1 items-center justify-end">
                <nav className="flex items-center space-x-1">
                  <a
                    href="https://www.youtube.com/channel/UC4aSXpTw09MS6mH55job4cQ"
                    className="h-10 p-2 text-slate-950 hover:text-[#ff0000]"
                    target="_blank"
                  >
                    <SiYoutube />
                  </a>

                  <a
                    href="https://github.com/ho-ssain/hk-ui"
                    className="h-10 p-2 text-slate-950 hover:text-[#3161a0]"
                    target="_blank"
                  >
                    <SiGithub />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main></main>

      <footer></footer>
    </>
  );
}

export default App;
