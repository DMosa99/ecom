import { NavLink } from "react-router";
import { footerLinks, socialLinks } from "../../data/examples";

function Footer() {
  return (
    <div className="w-full bg-black pt-12">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-12 lg:grid-cols-5 lg:px-16">
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-1 flex-col">
            <div className="flex flex-col">
              <h3 className="font-poppins mb-4 text-sm font-semibold tracking-wider text-white uppercase">
                {section.title}
              </h3>
              <div className="font-poppins flex flex-col text-xs font-extralight text-white">
                {section.links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.link}
                    className="py-2 hover:underline"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="hidden flex-col px-4 lg:flex">
          <h3 className="font-poppins mb-4 text-sm font-semibold tracking-wider text-white uppercase">
            suivez-nous
          </h3>
          <div className="font-inter flex flex-col text-sm font-extralight text-white">
            {socialLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                className="py-3 hover:underline"
              >
                {link.icon({
                  className: "text-2xl",
                })}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col px-12 lg:hidden">
        <h3 className="mb-4 font-mono font-semibold tracking-wider text-white uppercase">
          suivez-nous
        </h3>
        <div className="font-inter flex flex-row justify-between text-sm font-extralight text-white">
          {socialLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className="py-3 hover:underline"
            >
              {link.icon({
                className: "text-2xl",
              })}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="font-poppins mt-8 flex flex-col items-center justify-center gap-4 border-t border-gray-600 px-6 py-6 lg:flex-row lg:gap-0">
        <NavLink
          to="/cookie-policy"
          className="border-0 border-r-white px-3 text-xs font-extralight tracking-wider text-white hover:underline lg:border-r"
        >
          <p>Répertoire des cookies</p>
        </NavLink>
        <NavLink
          to={"/privacy-policy"}
          className="border-0 border-r-white px-3 text-xs font-extralight tracking-wider text-white hover:underline lg:border-r"
        >
          <p>Politique de protection </p>
        </NavLink>
        <NavLink
          to={"/terms-of-service"}
          className="px-3 text-xs font-extralight tracking-wider text-white hover:underline"
        >
          <p>Conditions d'utilisation</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
