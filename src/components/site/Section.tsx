/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { RxLink2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Title = ({ id, title }: { id: string; title: string }) => {
  const location = useLocation();

  const scrollToElement = () => {
    const anchor = document.getElementById(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      if (location.hash === `${id}`) {
        scrollToElement();
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, [id, location.hash]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.pushState({}, "", `#${id}`);
    scrollToElement();
  };

  return (
    <h2 id={id} className="scroll-mt-24">
      <Link
        onClick={handleClick}
        to={`#${id}`}
        className="text-lg font-bold text-gray-800 dark:text-white group relative"
      >
        <span className="absolute -left-4 top-1 inline-block shrink-0 opacity-0 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-[2rem] group-hover:-left-6 group-hover:opacity-100">
          <RxLink2 className="h-3.5 w-3.5 text-emerald-600" />
        </span>
        {title}
      </Link>
    </h2>
  );
};

const Section = ({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <section>
      {/* section heading  */}
      <Title id={id || title} title={title} />

      {/* section description  */}
      <p className="mt-1 text-gray-600 dark:text-zinc-400">{description}</p>

      {/* section preview area  */}
      <div className="mt-3">
        <div className="flex flex-col rounded-xl border p-6 shadow-sm dark:border-zinc-700 dark:bg-transparent">
          <div className="flex flex-wrap gap-2">
            {/* previewed stuff a.k.a the child components that get nested here */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
