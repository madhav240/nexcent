"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

function CarouselItem1() {
  return (
    <CarouselItem className="flex flex-col gap-24 lg:gap-32 xl:flex-row items-center justify-center">
      <div>
        <h1 className="text-7xl font-semibold text-primary-dgrey dark:text-foreground/90">
          Lessons and insights
          <br />
          <span className="text-primary-brand">from 8 years</span>
        </h1>
        <p className="text-primary-grey dark:text-foreground/70 mt-6">
          Where to grow your business as a photographer: site or social media?
        </p>

        <Button
          size="lg"
          className="bg-primary-brand h-12 hover:bg-primary-brand/80 mt-8 text-lg font-normal dark:text-foreground"
        >
          Register
        </Button>
      </div>
      <div>
        <Image
          src="/illustration-1.png"
          alt="Illustration"
          width={391}
          height={407}
          priority
        />
      </div>
    </CarouselItem>
  );
}

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  const logEmblaEvent = useCallback((api: any, eventName: any) => {
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("slidesInView", logEmblaEvent);
  }, [api, logEmblaEvent]);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(current);
  }, [api, current]);

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="bg-primary-silver dark:bg-slate-900 py-12 px-6 sm:py-24 sm:px-12"
      >
        <CarouselContent>
          <CarouselItem1 />
          <CarouselItem1 />
          <CarouselItem1 />
        </CarouselContent>

        <div className="flex gap-x-2 mx-auto w-fit bottom-4 absolute left-0 right-0">
          {Array.from(Array(3).keys()).map((value, index) => (
            <button
              key={index}
              onClick={() => setCurrent(value)}
              className={`h-2.5 w-2.5 rounded-full ${
                current === value ? "bg-primary-brand" : "bg-primary-brand/20"
              }`}
            ></button>
          ))}
        </div>
      </Carousel>
    </>
  );
}
