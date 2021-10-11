import { FC, useState, useEffect } from "react";
import throttle from "lodash.throttle";
import cn from "classnames";

const NavbarRoot: FC = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div
      className={cn(
        `sticky  top-0 bg-black z-40 transition-all duration-100 `,
        { "shadow-magical": hasScrolled }
      )}
    >
      {children}
    </div>
  );
};

export default NavbarRoot;
