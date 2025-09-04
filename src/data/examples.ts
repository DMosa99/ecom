import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import type { NavLinkProps } from "../components/layout/Navbar";
import type { Product } from "../app/Home";

export const navLinks: NavLinkProps[] = [
  {
    to: "/hommes",
    text: "Hommes",
    sections: [
      {
        title: "Vêtements",
        items: [
          { name: "T-shirts", link: "/hommes/t-shirts" },
          { name: "Pantalons", link: "/hommes/pantalons" },
          { name: "Vestes", link: "/hommes/vestes" },
          { name: "Chemises", link: "/hommes/chemises" },
          { name: "Jeans", link: "/hommes/jeans" },
          { name: "Shorts", link: "/hommes/shorts" },
          { name: "Pulls", link: "/hommes/pulls" },
        ],
      },
      {
        title: "Accessoires",
        items: [
          { name: "Montres", link: "/hommes/montres" },
          { name: "Sacs", link: "/hommes/sacs" },
          { name: "Ceintures", link: "/hommes/ceintures" },
          { name: "Chapeaux", link: "/hommes/chapeaux" },
          { name: "Lunettes de soleil", link: "/hommes/lunettes" },
          { name: "Écharpes", link: "/hommes/echarpes" },
          { name: "Gants", link: "/hommes/gants" },
          { name: "Chaussettes", link: "/hommes/chaussettes" },
        ],
      },
      {
        title: "Chaussures",
        items: [
          { name: "Baskets", link: "/hommes/baskets" },
          { name: "Bottes", link: "/hommes/bottes" },
          { name: "Sandales", link: "/hommes/sandales" },
          {
            name: "Chaussures habillées",
            link: "/hommes/chaussures-habillées",
          },
          {
            name: "Chaussures de sport",
            link: "/hommes/chaussures-de-sport",
          },
          {
            name: "Chaussures de randonnée",
            link: "/hommes/chaussures-de-randonnée",
          },
          {
            name: "Chaussures de ville",
            link: "/hommes/chaussures-de-ville",
          },
        ],
      },
      {
        title: "Sports",
        items: [
          {
            name: "Vêtements de sport",
            link: "/hommes/vetements-sport",
          },
          {
            name: "Chaussures de sport",
            link: "/hommes/chaussures-sport",
          },
          {
            name: "Accessoires de sport",
            link: "/hommes/accessoires-sport",
          },
          {
            name: "Équipement de sport",
            link: "/hommes/equipement-sport",
          },
          {
            name: "Vêtements de fitness",
            link: "/hommes/vetements-fitness",
          },
          {
            name: "Chaussures de fitness",
            link: "/hommes/chaussures-fitness",
          },
          {
            name: "Accessoires de fitness",
            link: "/hommes/accessoires-fitness",
          },
          {
            name: "Équipement de fitness",
            link: "/hommes/equipement-fitness",
          },
        ],
      },
      {
        title: "Outlet",
        items: [
          { name: "Vêtements", link: "/hommes/outlet/vetements" },
          { name: "Chaussures", link: "/hommes/outlet/chaussures" },
          { name: "Accessoires", link: "/hommes/outlet/accessoires" },
          { name: "Sports", link: "/hommes/outlet/sports" },
          {
            name: "Électronique",
            link: "/hommes/outlet/electronique",
          },
          { name: "Maison", link: "/hommes/outlet/maison" },
          { name: "Jardin", link: "/hommes/outlet/jardin" },
        ],
      },
    ],
  },
  {
    to: "/femmes",
    text: "Femmes",
    sections: [
      {
        title: "Vêtements",
        items: [
          { name: "Robes", link: "/femmes/robes" },
          { name: "Jupes", link: "/femmes/jupes" },
        ],
      },
      {
        title: "Accessoires",
        items: [
          { name: "Bijoux", link: "/femmes/bijoux" },
          { name: "Sacs", link: "/femmes/sacs" },
        ],
      },
    ],
  },
  {
    to: "/enfants",
    text: "Enfants",
    sections: [
      {
        title: "Vêtements",
        items: [
          { name: "T-shirts", link: "/enfants/t-shirts" },
          { name: "Pantalons", link: "/enfants/pantalons" },
          { name: "Vestes", link: "/enfants/vestes" },
          { name: "Chemises", link: "/enfants/chemises" },
          { name: "Jeans", link: "/enfants/jeans" },
          { name: "Shorts", link: "/enfants/shorts" },
          { name: "Pulls", link: "/enfants/pulls" },
        ],
      },
      {
        title: "Accessoires",
        items: [
          { name: "Montres", link: "/enfants/montres" },
          { name: "Sacs", link: "/enfants/sacs" },
          { name: "Ceintures", link: "/enfants/ceintures" },
          { name: "Chapeaux", link: "/enfants/chapeaux" },
        ],
      },
    ],
  },
  {
    to: "/chaussures",
    text: "Chaussures",
    sections: [
      {
        title: "Vêtements",
        items: [
          { name: "Robes", link: "/chaussures/robes" },
          { name: "Jupes", link: "/chaussures/jupes" },
        ],
      },
      {
        title: "Accessoires",
        items: [
          { name: "Bijoux", link: "/chaussures/bijoux" },
          { name: "Sacs", link: "/chaussures/sacs" },
        ],
      },
    ],
  },
  {
    to: "/sports",
    text: "Sports",
    sections: [
      {
        title: "Vêtements",
        items: [
          { name: "T-shirts", link: "/sports/t-shirts" },
          { name: "Pantalons", link: "/sports/pantalons" },
          { name: "Vestes", link: "/sports/vestes" },
          { name: "Chemises", link: "/sports/chemises" },
          { name: "Jeans", link: "/sports/jeans" },
          { name: "Shorts", link: "/sports/shorts" },
          { name: "Pulls", link: "/sports/pulls" },
        ],
      },
      {
        title: "Accessoires",
        items: [
          { name: "Montres", link: "/sports/montres" },
          { name: "Sacs", link: "/sports/sacs" },
          { name: "Ceintures", link: "/sports/ceintures" },
          { name: "Chapeaux", link: "/sports/chapeaux" },
        ],
      },
    ],
  },
  {
    to: "/outlet",
    text: "Outlet",
    sections: [
      {
        title: "Vêtements",
        items: [
          { name: "T-shirts", link: "/outlet/t-shirts" },
          { name: "Pantalons", link: "/outlet/pantalons" },
          { name: "Vestes", link: "/outlet/vestes" },
        ],
      },
      {
        title: "Accessoires",
        items: [
          { name: "Montres", link: "/outlet/montres" },
          { name: "Sacs", link: "/outlet/sacs" },
          { name: "Ceintures", link: "/outlet/ceintures" },
          { name: "Chapeaux", link: "/outlet/chapeaux" },
        ],
      },
    ],
  },
];

export const extraLinks = [
  "Suivi de commande",
  "Aide",
  "Contact",
  "Mon profil",
  "Trouver un magasin",
];

export const footerLinks = [
  {
    title: "Produits",
    links: [
      { name: "Nouveautés", link: "/nouveautes" },
      { name: "Promotions", link: "/promotions" },
      { name: "Meilleures ventes", link: "/meilleures-ventes" },
      { name: "Collections", link: "/collections" },
      { name: "Marques", link: "/marques" },
      { name: "Blog", link: "/blog" },
    ],
  },
  {
    title: "Collections",
    links: [
      { name: "Printemps/Été", link: "/printemps-ete" },
      { name: "Automne/Hiver", link: "/automne-hiver" },
      { name: "Capsule", link: "/capsule" },
      { name: "Édition Limitée", link: "/edition-limitee" },
      { name: "Collaborations", link: "/collaborations" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { name: "À propos", link: "/a-propos" },
      { name: "Carrières", link: "/carrieres" },
      { name: "Responsabilité sociale", link: "/responsabilite-sociale" },
      { name: "Conditions d'utilisation", link: "/conditions-utilisation" },
      {
        name: "Politique de confidentialité",
        link: "/politique-confidentialite",
      },
      { name: "Cookies", link: "/cookies" },
    ],
  },
  {
    title: "Assistance",
    links: [
      { name: "FAQ", link: "/faq" },
      { name: "Contactez-nous", link: "/contactez-nous" },
      { name: "Retours et échanges", link: "/retours-echanges" },
      { name: "Livraison", link: "/livraison" },
      { name: "Paiement sécurisé", link: "/paiement-securise" },
      { name: "Suivi de commande", link: "/suivi-commande" },
      { name: "Service client", link: "/service-client" },
      { name: "Plan du site", link: "/plan-site" },
    ],
  },
];

export const socialLinks = [
  { name: "Facebook", link: "https://www.facebook.com", icon: FaFacebook },
  { name: "Instagram", link: "https://www.instagram.com", icon: FaInstagram },
  { name: "Twitter", link: "https://www.twitter.com", icon: FaTwitter },
  { name: "Tiktok", link: "https://www.tiktok.com", icon: FaTiktok },
  { name: "Pinterest", link: "https://www.pinterest.com", icon: FaPinterest },
  { name: "YouTube", link: "https://www.youtube.com", icon: FaYoutube },
];

export const exampleProducts: Product[] = [
  {
    id: 1,
    name: "Chaussure Sambae",
    type: "Originals",
    price: 120,
    image: "../src/assets/images/chaussures_1.avif",
  },
  {
    id: 2,
    name: "Chaussure SL 72 OG",
    type: "Originals",
    price: 110,
    image: "../src/assets/images/chaussures_2.avif",
  },
  {
    id: 3,
    name: "Chaussure Gazelle Bold",
    type: "Originals",
    price: 120,
    image: "../src/assets/images/chaussures_3.avif",
  },
  {
    id: 4,
    name: "Chaussure Gazelle Indoor",
    type: "Originals",
    price: 120,
    image: "../src/assets/images/chaussures_4.avif",
  },
  {
    id: 5,
    name: "Chaussure Climacool 1",
    type: "Originals",
    price: 120,
    image: "../src/assets/images/chaussures_5.avif",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Chaussures Campus 00s",
    image: "../src/assets/images/fake_product/product_main.avif",
    secondary: "../src/assets/images/fake_product/product_secondary.avif",
    price: 120,
    type: "Originals",
    variants: [
      "../src/assets/images/fake_product/product_green.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_red.avif",
      "../src/assets/images/fake_product/product_white.avif",
    ],
  },
  {
    id: 2,
    name: "Chaussures Samba OG",
    image: "../src/assets/images/fake_product/product_green.avif",
    secondary: "../src/assets/images/fake_product/product_secondary.avif",
    price: 120,
    type: "Originals",
    variants: [
      "../src/assets/images/fake_product/product_main.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_red.avif",
      "../src/assets/images/fake_product/product_white.avif",
      "../src/assets/images/fake_product/product_main.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_red.avif",
      "../src/assets/images/fake_product/product_white.avif",
      "../src/assets/images/fake_product/product_main.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_red.avif",
      "../src/assets/images/fake_product/product_white.avif",
    ],
  },
  {
    id: 3,
    name: "Chaussures Handball Spezial",
    image: "../src/assets/images/fake_product/product_red.avif",
    price: 120,
    type: "Originals",
    variants: [
      "../src/assets/images/fake_product/product_green.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_main.avif",
      "../src/assets/images/fake_product/product_white.avif",
    ],
  },
  {
    id: 4,
    name: "Chaussures Campus 00s",
    image: "../src/assets/images/fake_product/product_main.avif",
    price: 120,
    type: "Originals",
    variants: [
      "../src/assets/images/fake_product/product_green.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_red.avif",
      "../src/assets/images/fake_product/product_white.avif",
    ],
  },
  {
    id: 5,
    name: "Chaussures Samba OG",
    image: "../src/assets/images/fake_product/product_green.avif",
    price: 120,
    type: "Originals",
    variants: [
      "../src/assets/images/fake_product/product_main.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_red.avif",
      "../src/assets/images/fake_product/product_white.avif",
    ],
  },
  {
    id: 6,
    name: "Chaussures Handball Spezial",
    image: "../src/assets/images/fake_product/product_red.avif",
    price: 120,
    type: "Originals",
    variants: [
      "../src/assets/images/fake_product/product_green.avif",
      "../src/assets/images/fake_product/product_black.avif",
      "../src/assets/images/fake_product/product_main.avif",
      "../src/assets/images/fake_product/product_white.avif",
    ],
  },
];
