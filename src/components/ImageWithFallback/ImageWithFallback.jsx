import { useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imageSrc, setImageSrc] = useState(src);

  console.log(imageSrc);

  const handleImageError = () => {
    setImageSrc(fallbackSrc);
  };

  return <Image src={imageSrc} onError={handleImageError} {...rest} />;
};

ImageWithFallback.defaultProps = {
  fallbackSrc: "/images/fallback-image.jpg",
};

export default ImageWithFallback;
