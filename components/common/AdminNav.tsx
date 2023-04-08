import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { IconType } from "react-icons/lib/esm/iconBase";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

interface Props {
  navitems: { label: string; icon: IconType; href: string }[];
}

const navOpenNavWidth = "w-60";
const navCloseNavWidth = "w-12";

const AdminNav: FC<Props> = ({ navitems }): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [showNav, setShowNav] = useState(true);
  const toggleNav = (visible: boolean) => {
    const currentNav = navRef.current;
    if (!currentNav) return;

    const { classList } = currentNav;
    if (visible) {
      classList.remove(navOpenNavWidth);
      classList.add(navCloseNavWidth);
    } else {
      classList.add(navOpenNavWidth);
      classList.remove(navCloseNavWidth);
    }
  };
  const updateNav = () => {
    toggleNav(showNav);
    const newState = !showNav;
    setShowNav(!showNav);
    localStorage.setItem("NavStatus", JSON.stringify(newState));
  };
  useEffect(() => {
    const navState = localStorage.getItem("NavStatus");
    if (navState !== null) {
      setShowNav(JSON.parse(navState));
      toggleNav(!JSON.parse(navState));
    } else {
      setShowNav(true);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between transition-width overflow-hidden sticky top-0"
    >
      <div>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center space-x-2 p-3 mb-10">
            <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
            {showNav && (
              <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold leading-none">
                Developers
              </span>
            )}
          </a>
        </Link>
        <div className="space-y-6">
          {navitems.map((items) => {
            return (
              <Link href={items.href} legacyBehavior key={items.label}>
                <a className="flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.90] transition">
                  <items.icon size={24} className="w-5 h-5" />
                  {showNav && (
                    <span className="ml-2 leading-none">{items.label}</span>
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <button
        onClick={updateNav}
        className="text-highlight-light dark:text-highlight-dark p-3 hover:scale-[0.90] transition self-end"
      >
        {showNav ? (
          <RiMenuFoldFill size={30} />
        ) : (
          <RiMenuUnfoldFill size={30} />
        )}
      </button>
    </nav>
  );
};

export default AdminNav;
