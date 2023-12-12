import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

type GalleryImageProps = React.ComponentProps<"li"> & {
    image: GalleryImage;
};

const GalleryImageItem: React.FC<GalleryImageProps> = ({ image }) => {
    return (
        <ImageListItem>
            <div>
                <Image
                    unoptimized
                    loading="lazy"
                    src={image?.image ?? ""}
                    className="w-full rounded-lg border-b border-black"
                    width={10}
                    height={10}
                    alt={image?.alt}
                />
            </div>
        </ImageListItem>
    );
};

export default GalleryImageItem;
