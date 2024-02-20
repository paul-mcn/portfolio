import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = ImageProps & { fallbackSrc: string };

const ImageWithFallback = (props: ImageWithFallbackProps) => {
	const { src, fallbackSrc, ...rest } = props;
	const [imageSrc, setImageSrc] = useState(src);

	const handleImageError = () => {
		setImageSrc(fallbackSrc);
	};

	return <Image src={imageSrc} onError={handleImageError} {...rest} />;
};

ImageWithFallback.defaultProps = {
	fallbackSrc: "/images/fallback-image.jpg",
};

export default ImageWithFallback;
