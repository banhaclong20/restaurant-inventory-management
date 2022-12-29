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
        columns={{ base: 1, md: 3 }}
        spacing={2}
        mb={{ base: "1", md: "2" }}
      >
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/SushiSME.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(0)}
          />
        </Flex>
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/oishiismu.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(1)}
          />
        </Flex>
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/tunatower.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(2)}
          />
        </Flex>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={2}
        mb={{ base: "1", md: "2" }}
      >
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/Roll3.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(3)}
          />
        </Flex>
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/RomanRoll.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(4)}
          />
        </Flex>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={2}
        mb={{ base: "1", md: "10" }}
      >
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/FlowerRoll.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(5)}
          />
        </Flex>
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/CaterpillarRoll.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(6)}
          />
        </Flex>
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/ChefSpecialties.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(7)}
          />
        </Flex>
        <Flex>
          <Image
            alt="feature image"
            src="/assets/menu/FreshCocktails.jpg"
            objectFit="cover"
            _hover={{ cursor: "pointer" }}
            onClick={() => setIndex(8)}
          />
        </Flex>
      </SimpleGrid>

      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
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
