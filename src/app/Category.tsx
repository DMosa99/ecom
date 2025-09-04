import { useParams } from "react-router";
import OutlinedButton from "../components/buttons/OutlinedButton";
import { IoFilter } from "react-icons/io5";
import Breadcrumb from "../components/Breadcrumb";
import Seemore from "../components/Seemore";
import type { Product } from "./Home";
import { products } from "../data/examples";
import { useState } from "react";

function Category() {
  const params = useParams();
  return (
    <div className="container mx-auto px-4 py-12 lg:px-12">
      <Breadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: params.category || "Category",
            href: `/${params.category}`,
          },
        ]}
      />
      <div className="mt-8 flex flex-col justify-between gap-4 sm:items-start lg:flex-row">
        <h1 className="font-poppins text-start text-3xl font-bold tracking-wider uppercase lg:text-4xl">
          Chaussures pour hommes{" "}
          <span className="text-xs font-light tracking-wider text-gray-500">
            [2184]
          </span>
        </h1>
        <OutlinedButton
          name="FILTRER & TRIER"
          onClick={() => {}}
          icon={IoFilter}
        />
      </div>
      <Seemore>{description}</Seemore>
      <div className="mt-8 grid grid-cols-2 gap-3 pb-12 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((item, index) => {
          return <ProductCardDetailed key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Category;

const description = `Adidas te présente sa collection de chaussures pour homme. Déclinées
        dans une large gamme de modèles et de coloris, elles t'accompagnent dans
        toutes tes activités et se combinent avec toutes tes tenues ! Explore
        dès aujourd’hui l'éventail de chaussures de sport pour homme adidas, et
        trouve la paire qui deviendra ton nouvel allié au quotidien. À la ville
        ou à l'entraînement, nos chaussures confortables et casual pour homme ne
        laissent personne indifférent ! Opte pour une paire classique dans des
        tons sobres, qui s’associera facilement à tous tes looks, ou ose un
        style un peu plus audacieux en privilégiant des coloris ultra tendance.
        N’attends plus et parcours dès maintenant la sélection complète et
        incontournable de chaussures adidas pour homme !`;

const ProductCardDetailed = ({ item }: { item: Product }) => {
  const [hovered, setHovered] = useState("");
  return (
    <div className="group relative flex flex-1 flex-col hover:z-10">
      <div className="top-0 left-0 border border-transparent bg-white hover:cursor-pointer lg:group-hover:absolute lg:hover:border-black">
        <img src={item.image} className="aspect-square w-full" />
        {(item.secondary || hovered) && (
          <img
            src={hovered ? hovered : item.secondary}
            className="invisible absolute top-0 aspect-square w-full group-hover:visible"
          />
        )}
        {item.variants && item.variants.length > 0 && (
          <div className="no-scrollbar mt-1 hidden h-12 w-full overflow-x-scroll lg:group-hover:flex">
            {item.variants.map((variant, index) => {
              return (
                <img
                  key={index}
                  src={variant}
                  onMouseEnter={() => setHovered(variant)}
                  onMouseLeave={() => setHovered("")}
                  className={`aspect-square h-full border-b-2 border-b-transparent hover:border-b-black`}
                />
              );
            })}
          </div>
        )}
        <div className="flex flex-col gap-[2px] px-2 py-3">
          <p className="font-poppins text-sm font-semibold tracking-wide xl:text-base">
            {item.price} <span className="font-inter">€</span>
          </p>
          <p className="font-poppins text-xs font-light xl:text-sm">
            {item.name}
          </p>
          <p className="font-poppins mt-1 text-xs font-light text-gray-500 xl:text-sm">
            {item.type}
          </p>
        </div>
      </div>
    </div>
  );
};
