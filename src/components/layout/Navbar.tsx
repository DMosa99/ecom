import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigation, type To } from "react-router";
import { useLoadingBar } from "react-top-loading-bar";
import {
  LuUser,
  LuShoppingBag,
  LuHeart,
  LuMenu,
  LuSearch,
  LuX,
  LuChevronRight,
} from "react-icons/lu";
import { extraLinks, navLinks } from "../../data/examples";
import Modal from "../modals/Modal";

export type NavLinkProps = {
  to: To;
  text: string;
  sections: {
    title: string;
    items: { name: string; link: To }[];
  }[];
};

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovered, setHovered] = useState<NavLinkProps>(navLinks[0]);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigation = useNavigation();
  const { start, complete } = useLoadingBar();

  //* This effect handles the visibility of the navbar based on scroll direction.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  //* This effect handles the loading bar state based on navigation state.
  useEffect(() => {
    if (navigation.state === "loading") {
      start("static");
    } else {
      complete();
    }
  }, [navigation.state]);

  //* This effect disable body scroll when the menu is open.
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  //* This effect scrolls to the top of the page when the pathname changes.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${location.pathname == "/" ? "fixed" : "absolute"} top-0 z-50 w-full ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform delay-200 duration-400`}
      >
        <div className="flex h-10 w-full items-center justify-center bg-black">
          <p className="font-poppins text-xs font-semibold tracking-wider text-white">
            Retours et échanges gratuits
          </p>
        </div>
        <div
          className={`flex h-14 w-full items-center justify-between gap-6 border-b-1 border-b-gray-200 bg-white px-2 text-black lg:px-8`}
        >
          <div className="flex flex-1 lg:hidden">
            <button
              className={"px-3"}
              onClick={() => {
                setShowMenu(!showMenu);
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              <LuMenu className="text-xl" />
            </button>
            <NavLink to={"/cart"} className={"px-3"}>
              <LuHeart className="text-xl" />
            </NavLink>
          </div>
          <div className="mx-0 flex flex-0 lg:mx-auto lg:flex-1">
            <NavLink to={"/"}>
              <p className="font-poppins text-3xl font-extrabold">LOGO</p>
            </NavLink>
          </div>
          <div className="peer z-10 hidden h-full translate-y-[1px] flex-row tracking-widest uppercase lg:flex">
            {navLinks.map((nav, index) => (
              <NavItem key={index} nav={nav} setHovered={setHovered} />
            ))}
          </div>
          <div className="flex flex-1 flex-row items-center justify-end">
            <Search />
            <div
              onClick={() => setOpen(true)}
              className={"px-3 hover:cursor-pointer"}
            >
              <LuUser className="text-xl" />
            </div>
            <NavLink to={"/wishlist"} className={"group hidden px-3 lg:block"}>
              <LuHeart className="text-xl group-hover:fill-red-600 group-hover:text-red-600" />
            </NavLink>
            <NavLink to={"/search"} className={"block px-3 lg:hidden"}>
              <LuSearch className="text-xl" />
            </NavLink>
            <NavLink to={"/cart"} className={"px-3"}>
              <LuShoppingBag className="text-xl" />
            </NavLink>
          </div>
          <MoreDetailsMenu hovered={hovered} />
          <DrawerMenu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            navLinks={navLinks}
            extraLinks={extraLinks}
          />
        </div>
      </div>
      <Modal visible={open} close={() => setOpen(false)}>
        <div className="flex flex-col gap-4">
          <p className="font-poppins w-2/3 text-3xl font-bold">
            CONNECTE-TOI OU INSCRIS-TOI
          </p>
          <p className="font-poppins text-sm font-light">
            Profite d'un accès réservé aux membres aux produits exclusifs,
            expériences, offres et plus encore.
          </p>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;

const NavItem = ({
  nav,
  setHovered,
}: {
  nav: NavLinkProps;
  setHovered: (nav: NavLinkProps) => void;
}) => {
  return (
    <NavLink
      to={nav.to}
      onMouseEnter={() => setHovered(nav)}
      className={`flex h-full items-center justify-center border-b-[3px] border-transparent px-3 text-sm hover:border-black`}
    >
      <p
        className={`font-poppins ${nav.text == "Chaussures" || nav.text == "Sports" ? "font-light" : "font-semibold"}`}
      >
        {nav.text}
      </p>
    </NavLink>
  );
};

const MoreDetailsMenu = ({ hovered }: { hovered: NavLinkProps }) => {
  return (
    <div className="invisible absolute top-24 left-0 w-full border-b-1 border-b-gray-200 bg-white tracking-wider peer-hover:visible hover:visible">
      <div className="flex h-full px-6">
        <div className="flex flex-row gap-6">
          {hovered.sections.map((section, index) => (
            <div
              key={index}
              className={`font-inter flex flex-col gap-2 py-8 ${index == 0 ? "border-r-1 border-r-gray-200 pr-12" : "pr-8"}`}
            >
              <p className="text-xs font-bold uppercase">{section.title}</p>
              <div className="flex flex-col gap-2">
                {section.items.map((item, itemIndex) => (
                  <NavLink
                    key={itemIndex}
                    to={item.link}
                    className="font-poppins text-xs font-light hover:underline"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DrawerMenu = ({
  showMenu,
  setShowMenu,
  navLinks,
  extraLinks,
}: {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  navLinks: NavLinkProps[];
  extraLinks: string[];
}) => {
  return (
    <div
      className={`absolute top-0 left-0 flex h-screen w-screen flex-col bg-white tracking-wider lg:hidden ${showMenu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-600`}
    >
      <div className="flex h-14 w-full flex-row items-center justify-between border-b-1 border-b-gray-200 px-4">
        <div />
        <NavLink to={"/"} className={"mx-auto lg:mx-0"}>
          <p className="font-poppins text-3xl font-extrabold">LOGO</p>
        </NavLink>
        <button
          onClick={() => setShowMenu(false)}
          className={"absolute right-4 px-3"}
        >
          <LuX className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col border-b-1 border-b-gray-200 py-3">
        {navLinks.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.to}
            onClick={() => setShowMenu(false)}
            className="flex flex-row justify-between px-6 py-3 text-lg uppercase"
          >
            <p
              className={`font-poppins ${nav.text == "Chaussures" || nav.text == "Sports" ? "font-light" : "font-semibold"}`}
            >
              {nav.text}
            </p>
            <LuChevronRight className="text-xl" />
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col py-3">
        {extraLinks.map((link, index) => (
          <div key={index} className="flex flex-row justify-between px-6 py-3">
            <p className={`font-poppins font-light`}>{link}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="relative hidden lg:block">
      <input
        className="font-inter mx-4 rounded-none border-1 border-gray-200 bg-gray-100 py-[6px] pr-10 pl-3 text-xs font-light tracking-wider placeholder:text-gray-600"
        placeholder="Rechercher"
      />
      <button className="hover:cursor-pointer">
        <LuSearch className="absolute top-1/2 right-6 -translate-y-1/2 text-base text-gray-600" />
      </button>
    </div>
  );
};
