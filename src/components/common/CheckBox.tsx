import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface Props {
  text: string;
  toggle: (value: boolean) => void;
}

function CheckBox({ text, toggle }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => {
        setChecked(!checked);
        toggle(!checked);
      }}
      className="flex gap-2 hover:cursor-pointer"
    >
      <div
        className={`flex aspect-square h-5 w-5 items-center justify-center border-2 hover:border-black ${checked ? `border-black bg-black` : `border-gray-600 bg-transparent`}`}
      >
        {checked && <IoCheckmarkSharp className="size-3 text-white" />}
      </div>
      <p className="font-poppins line text-[13px]/5 font-light tracking-wide text-gray-800">
        {text}
      </p>
    </div>
  );
}

export default CheckBox;
