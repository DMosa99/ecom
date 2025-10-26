import type { ReactNode } from "react";
import { VscClose } from "react-icons/vsc";

interface Props {
  visible: boolean;
  close: () => void;
  children: ReactNode;
}

function Modal({ visible, close, children }: Props) {
  return (
    <div
      onClick={close}
      className={`fixed top-0 z-50 flex h-screen w-screen items-end justify-center hover:cursor-pointer lg:items-center ${visible ? "visible bg-black/60" : "invisible bg-black/10"}`}
    >
      <div
        className={`relative flex max-h-2/3 max-w-full border-1 border-gray-200 bg-white hover:cursor-default lg:max-w-1/3`}
      >
        <button
          onClick={close}
          className="absolute -top-7 right-3 z-50 border-1 bg-white p-2 text-3xl transition-transform hover:scale-95 hover:cursor-pointer lg:-right-7"
        >
          <VscClose />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-h-1/2 overflow-y-scroll px-6 py-10`}
        >
          {/* <div className="mb-6 flex w-full items-center justify-between">
            <p className="font-poppins text-3xl font-extrabold text-black">
              LOGO
            </p>
          </div> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
