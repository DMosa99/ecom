import { IoMdReturnRight } from "react-icons/io";
import { NavLink, useNavigate, useParams } from "react-router";

function Breadcrumb({ links }: { links?: { name: string; href: string }[] }) {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-1">
      <button
        onClick={() => navigate(-1)}
        className={`font-poppins flex flex-row items-center gap-2 px-1 text-sm font-semibold tracking-wider uppercase underline underline-offset-1 transition-colors hover:cursor-pointer hover:bg-black hover:text-white`}
      >
        <IoMdReturnRight className="rotate-180 text-lg" />
        <p>Back</p>
      </button>
      {links?.map((link, index) => {
        return (
          <div className="flex flex-row items-center gap-1" key={index}>
            <NavLink
              to={link.href}
              onClick={(e) =>
                link.href === `/${params.category}` && e.preventDefault()
              }
              className={`font-poppins px-1 text-sm font-light ${
                link.href === `/${params.category}`
                  ? "hover:cursor-default"
                  : "underline underline-offset-1 transition-colors hover:bg-black hover:text-white"
              }`}
            >
              {link.name}
            </NavLink>
            {index < links.length - 1 && (
              <span className="text-gray-500">/</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
