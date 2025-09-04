import type { IconType } from "react-icons";

function Button({
  name,
  onClick,
  icon,
}: {
  name: string;
  onClick: () => void;
  icon?: IconType;
}) {
  return (
    <div className="relative z-20">
      <div className="absolute top-1 left-1 -z-10 h-full w-full border-1 border-white" />
      <button
        onClick={onClick}
        className={`flex flex-row items-center justify-center gap-3 bg-white px-5 py-3 transition-transform hover:translate-x-1 hover:translate-y-1 hover:cursor-pointer hover:opacity-90`}
      >
        <p className="font-poppins text-sm font-semibold tracking-wider">
          {name}
        </p>
        {icon &&
          icon({
            className: "text-base",
          })}
      </button>
    </div>
  );
}

export default Button;
