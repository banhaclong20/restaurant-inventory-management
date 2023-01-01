import { Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";
import { images } from "./images";

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={2}
        mb={{ base: "1", md: "2" }}
      >
        {images.map((image, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Flex key={`${image.caption}_${idx}`}>
            <Image
              alt={image.caption}
              src={image.src}
              objectFit="cover"
              _hover={{ cursor: "pointer" }}
              onClick={() => setIndex(idx)}
            />
          </Flex>
        ))}
      </SimpleGrid>

      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
        />
      )}
    </div>
  );
}
