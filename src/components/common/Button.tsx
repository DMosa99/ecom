import type { IconType } from "react-icons";

function Button({
  name,
  onClick,
  icon,
  disabled = false,
  loading = false,
  theme = "light",
}: {
  name?: string;
  onClick: () => void;
  icon?: IconType;
  disabled?: boolean;
  loading?: boolean;
  theme?: "dark" | "light";
}) {
  return (
    <div
      className={`relative z-20 flex ${disabled || loading ? `opacity-50` : `opacity-100`}`}
    >
      <div
        className={`absolute top-1 left-1 -z-10 h-full w-full border-1 ${theme === "dark" ? `border-white` : `border-black`}`}
      />
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex w-full flex-row items-center justify-center gap-3 ${theme === "dark" ? `bg-white text-black` : `bg-black text-white`} px-5 py-3 ${!(disabled || loading) ? `transition-transform hover:translate-x-1 hover:translate-y-1 hover:cursor-pointer hover:opacity-90` : `hover:cursor-not-allowed`}`}
      >
        {name && (
          <p className={`font-poppins text-sm font-semibold tracking-wider`}>
            {name}
          </p>
        )}
        {!loading &&
          icon &&
          icon({
            className: "text-lg",
          })}
        {loading && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-solid border-gray-200 border-t-black" />
        )}
      </button>
    </div>
  );
}

export default Button;
