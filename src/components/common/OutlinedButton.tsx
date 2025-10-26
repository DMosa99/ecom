import type { IconType } from "react-icons";

function OutlinedButton({
  name,
  onClick,
  icon,
  position = "right",
}: {
  name?: string;
  onClick: () => void;
  icon?: IconType;
  position?: "left" | "right";
}) {
  return (
    <div className="relative z-20 flex">
      <button
        onClick={onClick}
        className={`flex flex-1 ${position == "left" ? `flex-row-reverse` : `flex-row`} items-center justify-center gap-3 border border-black px-5 py-3 transition hover:cursor-pointer hover:bg-gray-50`}
      >
        {name && (
          <p className="font-poppins text-sm font-semibold tracking-wider">
            {name}
          </p>
        )}
        {icon &&
          icon({
            className: "text-lg",
          })}
      </button>
    </div>
  );
}

export default OutlinedButton;
