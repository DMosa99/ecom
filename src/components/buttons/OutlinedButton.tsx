import type { IconType } from "react-icons";

function OutlinedButton({
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
      <button
        onClick={onClick}
        className={`flex flex-row items-center justify-center gap-3 border border-black px-5 py-2 transition hover:cursor-pointer hover:bg-gray-50`}
      >
        <p className="font-poppins text-sm font-semibold tracking-wider">
          {name}
        </p>
        {icon &&
          icon({
            className: "text-lg",
          })}
      </button>
    </div>
  );
}

export default OutlinedButton;
