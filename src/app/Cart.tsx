import { BsArrowRight } from "react-icons/bs";
import Button from "../components/common/Button";

function Cart() {
  return (
    <div className="container mx-auto flex h-full min-h-[calc(80vh)] flex-col items-start justify-center gap-6">
      <p className="font-poppins mb-2 text-4xl font-bold uppercase">
        Le panier est vide
      </p>
      <p className="font-poppins text-base font-light">
        Dès que tu auras ajouté un article au panier, il apparaîtra ici. C'est
        parti ?
      </p>
      <Button name="C'EST PARTI" onClick={() => {}} icon={BsArrowRight} />
    </div>
  );
}

export default Cart;
