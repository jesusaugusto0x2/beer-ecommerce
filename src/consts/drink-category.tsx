import Image from "next/image";

const ImageIcon = ({ src }: { src: string }) => (
  <Image src={src} alt="btn-group-icon" width={20} height={20} />
);

export const DRINK_CATEGORIES = [
  {
    title: "All",
  },
  {
    title: "Beer",
    icon: <ImageIcon src="/icons/beer.png" />,
  },
  {
    title: "Wine",
    icon: <ImageIcon src="/icons/wine.png" />,
  },
];
