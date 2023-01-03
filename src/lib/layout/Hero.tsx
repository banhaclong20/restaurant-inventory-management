import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const height = useBreakpointValue({
    base: "400px",
    md: "500px",
    lg: "600px",
    xl: "700px",
  });
  const slidetopContent = useBreakpointValue({
    base: "25%",
    md: "35%",
    lg: "50%",
  });

  const cards = [
    {
      title: "Our promotion",
      text: "All day Wednesday - 50% off bottles of wines, cold sake and carafes of hot sake",
      image: "/assets/promotion-slide-bg.jpg",
    },
    {
      title: "Sushi & Pan-Asian Cuisine",
      text: "Authentic Tastes. Authentic Atmosphere.",
      image: "/assets/hero-bg-1.jpg",
    },
    {
      title: "We can't wait to serve you!",
      text: "Count on us for delivery, take-out and curbside pick up with Online Ordering!",
      image: "/assets/contact-us-bg.jpg",
    },
  ];

  return (
    <Box position="relative" height={height} width="full" overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        color="#FFF"
        className="hero-slider-nav"
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        color="#FFF"
        className="hero-slider-nav"
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(s) => setSlider(s)}>
        {cards.map((card) => (
          <Box
            key={card.title}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container
              size="container.lg"
              height="700px"
              position="relative"
              centerContent
            >
              <Stack
                spacing={6}
                w="full"
                maxW="6xl"
                position="absolute"
                top={slidetopContent}
                transform="translate(0, -50%)"
                align="center"
                px="5"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                  color="#FFF"
                  align="center"
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="#FFF"
                  align="center"
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
