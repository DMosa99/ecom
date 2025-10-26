import { LuHeart } from "react-icons/lu";
import { exampleProducts } from "../data/examples";
import { useRef, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Button from "../components/common/Button";

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  secondary?: string;
  variants?: string[];
};

function Home() {
  return (
    <div>
      <BrandSection
        title="Maillots Liverpool Fc 25/26"
        description="Réunis. Déterminés."
        imageUrl="./images/liverpool_2.jpg"
        buttonText="Acheter"
        onButtonClick={() => {}}
      />
      <ProductsSection products={exampleProducts} />
      <BrandSection
        title="Maillots Liverpool Fc 25/26"
        description="Réunis. Déterminés."
        imageUrl="./images/liverpool.avif"
        buttonText="Acheter"
        onButtonClick={() => {}}
      />
      <ProductsSection products={exampleProducts} />
      <AboutUsSection />
      <BecomeAMemberSection />
    </div>
  );
}

export default Home;

const BrandSection = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
}: {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}) => {
  return (
    <div className="relative h-[70vh] w-full lg:h-auto">
      <img
        src={imageUrl}
        alt="Hero Image"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-start justify-end gap-1 px-8 py-8 lg:px-32 lg:py-16">
        <div className="font-poppins bg-white px-[6px] py-[2px] text-base font-bold tracking-wider text-black uppercase lg:text-xl">
          <p>{title}</p>
        </div>
        <div className="font-poppins mb-4 bg-white px-2 py-1 text-xs font-light tracking-wider text-black lg:text-sm">
          <p>{description}</p>
        </div>
        <Button
          name={buttonText}
          onClick={onButtonClick}
          icon={BsArrowRight}
          theme="dark"
        />
      </div>
    </div>
  );
};

const BecomeAMemberSection = () => {
  return (
    <div className="w-full bg-sky-600">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-6 py-10">
        <p className="font-poppins text-center text-2xl font-bold tracking-wider text-white uppercase">
          Devenez membre et gagnez 100 points et un bon de 10 % à dépenser en
          récompenses
        </p>
        <Button
          name="S'INSCRIR GRATUITEMENT"
          onClick={() => {}}
          icon={BsArrowRight}
        />
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-black py-6">
      <div className="font-poppins flex w-[80%] flex-col gap-6 py-10 text-white lg:w-[45%]">
        <p className="text-center text-2xl font-bold tracking-wider uppercase lg:text-3xl">
          ADIDAS, LE MAGASIN DE SPORT POUR LA PERFORMANCE ET LE STYLE DEPUIS
          1949
        </p>
        <p className="text-justify text-sm font-extralight tracking-wider">
          Le sport nous permet de rester en forme. D'ouvrir notre esprit. Et de
          nous rassembler. À travers le sport, nous avons le pouvoir de changer
          des vies, avec des histoires d'athlètes inspirants, des technologies
          innovantes et des produits qui permettent à chacun de bouger.
          <br />
          <br /> Dans nos magasins ou sur notre boutique en ligne, découvre des
          vêtements de sport conçus pour t'aider à repousser tes limites. Que tu
          sois runner, basketteur, footballeur ou simplement actif, tu trouveras
          tout ce qu'il te faut chez adidas. Nous sommes là pour t'aider à
          t'entraîner plus dur, à courir plus vite et à aller plus loin, avec
          des produits qui suivent tes mouvements et t'aident à atteindre tes
          objectifs.
          <br />
          <br /> Explore notre boutique en ligne pour découvrir les dernières
          collections adidas, où innovation et style se rencontrent. Du
          professeur de yoga au randonneur qui s'échappe de la ville, nous
          soutenons tous ceux qui donnent le meilleur d'eux-mêmes. Les magasins
          de sport adidas proposent des produits performants pour tous les
          niveaux, que tu sois un athlète de haut niveau, un fan de sport ou un
          simple débutant. Et grâce à notre magasin en ligne, tu peux toujours
          accéder aux nouveaux vêtements de sport et meilleurs équipements, où
          que tu sois.
          <br />
          <br /> Le magasin de sport adidas est bien plus qu'un lieu de shopping
          : c'est un espace où les créateurs peuvent élever leur niveau et
          redéfinir les limites du possible. Nous faisons équipe avec les
          meilleurs de l'industrie pour co-créer des produits qui soutiennent le
          mouvement, l'expression de soi et un mode de vie actif. Peu importe où
          le sport t'emmène, adidas t'accompagne partout dans ta quête vers
          l'excellence.
        </p>
      </div>
    </div>
  );
};

const ProductsSection = ({ products }: { products: Product[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [filter, setFilter] = useState("Nouveautés");
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="font-poppins mb-6 text-2xl font-bold tracking-wider uppercase lg:text-3xl">
        EXPLORE LES CHAUSSURES DE RUNNING
      </h2>
      <div className="no-scrollbar mb-4 flex flex-row justify-start gap-2 overflow-x-scroll">
        <FilterButton
          name="Nouveautés"
          selected={filter === "Nouveautés"}
          onClick={() => {
            setFilter("Nouveautés");
          }}
        />
        <FilterButton
          name="Le meilleur"
          selected={filter === "Le meilleur"}
          onClick={() => {
            setFilter("Le meilleur");
          }}
        />
        <FilterButton
          name="Prochainement"
          selected={filter === "Prochainement"}
          onClick={() => {
            setFilter("Prochainement");
          }}
        />
      </div>
      <div className="relative w-full">
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({
                left:
                  scrollRef.current.scrollLeft - scrollRef.current.offsetWidth,
                behavior: "smooth",
              });
            }
          }}
          className={`invisible absolute top-1/2 left-0 z-10 -translate-y-full border bg-white p-3 transition hover:cursor-pointer hover:bg-gray-100 lg:visible ${scrollLeft === 0 ? "hidden" : ""}`}
        >
          <BsArrowLeft className="text-xl" />
        </button>
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({
                left:
                  scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
                behavior: "smooth",
              });
            }
          }}
          className={`invisible absolute top-1/2 right-0 z-10 -translate-y-full border bg-white p-3 transition hover:cursor-pointer hover:bg-gray-100 lg:visible ${scrollLeft + (scrollRef.current?.offsetWidth ?? 0) >= scrollWidth && scrollLeft != 0 ? "hidden" : ""}`}
        >
          <BsArrowRight className="text-xl" />
        </button>
        <div
          ref={scrollRef}
          onScroll={(e) => {
            setScrollLeft(e.currentTarget.scrollLeft);
            e.currentTarget.scrollWidth != scrollWidth &&
              setScrollWidth(e.currentTarget.scrollWidth);
          }}
          className="lg:scrollbar grid w-full grid-cols-2 flex-row gap-3 overflow-x-scroll pb-12 lg:flex"
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ item }: { item: Product }) => {
  return (
    <div
      onClick={() => {}}
      className="relative flex w-full shrink-0 flex-col border border-transparent hover:cursor-pointer hover:border-black lg:w-[calc((100%-36px)/4)]"
    >
      <button className="group absolute top-4 right-4 text-2xl text-black hover:cursor-pointer">
        <LuHeart className="text-lg group-hover:fill-red-500 group-hover:text-red-500" />
      </button>
      <img
        src={item.image}
        className="aspect-square w-full max-w-fit object-cover"
      />
      <div className="hidden flex-col gap-[2px] p-2 lg:flex">
        <p className="font-inter text-sm font-semibold tracking-wide">
          {item.price} <span className="font-inter">€</span>
        </p>
        <p className="font-poppins text-sm font-light">{item.name}</p>
        <p className="font-poppins mt-1 text-sm font-light text-gray-500">
          {item.type}
        </p>
      </div>
    </div>
  );
};

const FilterButton = ({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`no-scrollbar border border-black px-3 py-[6px] ${selected ? "bg-black text-white" : "bg-transparent text-black hover:bg-gray-100"} hover:cursor-pointer`}
    >
      <p className="font-poppins text-sm font-light tracking-wide whitespace-nowrap">
        {name}
      </p>
    </button>
  );
};
