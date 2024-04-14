import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

type Props = ImageProps & {
  fallbackSrc?: string;
};

export const Img: FC<Props> = ({
  fallbackSrc = "/img/unavailable.jpg",
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(props.src);

  return (
    <Image
      {...props}
      alt={props.alt}
      src={imageSrc}
      onError={(e) => {
        props.onError?.(e);
        setImageSrc(fallbackSrc);
      }}
    />
  );
};
