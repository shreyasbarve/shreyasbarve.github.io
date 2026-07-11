import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  return <Image src={src} alt={alt} height={48} width={48} />;
};

export default ImageComponent;
