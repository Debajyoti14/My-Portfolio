import React, { useEffect, useRef, useState } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
        TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        <br />
        ⚡ I'm a tech enthusiast passionate about Cloud, DevOps, and Backend Development. I have experience working with tools like Rust, AWS, Docker, Kubernetes, Terraform to build scalable and efficient systems.
        <br />
        <br />
        ✨ In Backend Development, I specialize in Node.js, Express, MongoDB, and microservices architecture, ensuring robust and high-performance applications.
        <br />
        <br />
        ✨ In Web Development, I work with Next.js, React, TypeScript, and Tailwind CSS to build modern and interactive user experiences.
        <br />
        <br />
        ⚡ I have past experience in building Mobile Applications using Flutter, leveraging Dart, Firebase, BLoC, Provider, and SQLite for seamless cross-platform development.


        <br />
        <br />
        <br />

        {/* 👨‍💻 I'm also a Hackathon Enthusiast. Won a National Hackathon Organized by IIT Guwahati Coding Club - Ethos Hackathon. In the past, I have participated in Microsoft Imagine Cup 2022 and got into the top 8 positions in Education Category and also attended our first offline Hackathon Hackoverflow 4.0 where we came into the top 10 at Chandigarh University. */}
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
              name={`slide-${index}`}
              aria-label={`slide ${index} was selected`}
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
