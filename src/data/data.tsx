import { NavMenu, Tour, Value } from "@interfaces/interfaces";
import { FiSend } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";

import tour1 from "@assets/leio-mclaren-jEgQpfkHEWY-unsplash.jpg";
import tour2 from "@assets/daniel-jensen-tQpypKA92k8-unsplash.jpg";
import tour3 from "@assets/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg";
import tour4 from "@assets/yousef-alfuhigi-bMIlyKZHKMY-unsplash.jpg";

export const navMenus: NavMenu[] = [
  { name: "Our tours" },
  { name: "About us" },
  { name: "About us" },
  { name: "Booking" },
  { name: "FAQ" },
];

export const values: Value[] = [
  {
    icon: <FiSend />,
    title: "Airport pickup",
    content: (
      <>
        xxxxxxxx xxxxxxxx xxxx
        <br />
        xxxxxxxxxxxxx
      </>
    ),
  },
  {
    icon: <TfiWallet />,
    title: "Easy booking",
    content: (
      <>
        xxxxxxxx xxxxxxxx xxxx
        <br />
        xxxxxxxxxxxxx
      </>
    ),
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Best tour guide",
    content: (
      <>
        xxxxxxxx xxxxxxxx xxxx
        <br />
        xxxxxxxxxxxxx
      </>
    ),
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Lots of promos",
    content: (
      <>
        xxxxxxxx xxxxxxxx xxxx
        <br />
        xxxxxxxxxxxxx
      </>
    ),
  },
];

export const tours: Tour[] = [
  {
    img: tour1,
    title: "Alone with nature",
    price: 100,
    star: 5,
  },
  {
    img: tour2,
    title: "The beach",
    price: 200,
    star: 4.9,
  },
  {
    img: tour3,
    title: "Moutain nature",
    price: 150,
    star: 5,
  },
  {
    img: tour4,
    title: "Airport thailand",
    price: 80,
    star: 4.8,
  },
];
