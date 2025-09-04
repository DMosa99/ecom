import { useState } from "react";

function Seemore({ children }: { children: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-6 flex flex-col items-start gap-1">
      <p
        className={`font-poppins line w-full text-sm leading-5 font-light tracking-wider lg:w-[80%] ${open ? "line-clamp-none" : "line-clamp-2"}`}
      >
        {children}
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="font-poppins text-sm font-light tracking-wide underline underline-offset-1 hover:cursor-pointer"
      >
        En voir {open ? "moins" : "plus"}
      </button>
    </div>
  );
}

export default Seemore;
