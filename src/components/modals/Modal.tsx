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
      className={`fixed top-0 z-50 flex h-screen w-screen items-center justify-center hover:cursor-pointer ${visible ? "visible bg-black/60" : "invisible bg-black/10"}`}
    >
      <div
        className={`relative flex max-h-1/2 max-w-1/3 border-1 border-gray-200 bg-white hover:cursor-default`}
      >
        <button
          onClick={close}
          className="absolute -top-7 -right-7 border-1 bg-white p-2 text-4xl hover:cursor-pointer"
        >
          <VscClose />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`max-h-1/2 overflow-y-scroll px-8 py-10`}
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
