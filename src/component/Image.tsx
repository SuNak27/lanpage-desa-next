import Image from "next/legacy/image";

type GambarProps = {
  image: string;
  width?: number;
  height?: number;
  className?: string;
  type?: 'link' | 'image';
  tag?: 'img';
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
};

export default function Gambar({ image, width, height, className, type, tag, layout }: GambarProps) {
  switch (tag) {
    case 'img':
      if (image !== "") {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt="image" src={type == 'link' ? image : process.env.NEXT_PUBLIC_IMAGE_URL + image}
            width={width} height={height} className={className} />
        );
      } else {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt="image" width={width} height={height} src={'/assets/images/no-image.png'} className={className} />
        );
      }
    default:
      if (image !== "") {
        return (
          <Image alt="image" src={type == 'link' ? image : process.env.NEXT_PUBLIC_IMAGE_URL + image} width={width} height={height} className={className} layout={layout} />
        );
      } else {
        return (
          <Image alt="image" width={width ?? 300} height={height ?? 300} src={'/assets/images/no-image.png'} className={className}
            layout={layout}
          />
        );
      }
  }


}