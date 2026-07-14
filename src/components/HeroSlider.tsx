"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/brand/hero-wavy-red.jpg",
    heading: "Legal Insights",
    text: "Expert Analysis and Thoughtful Commentary on the Evolving Legal Landscape, Delivering In-Depth Perspectives on Trends, Cases, and Regulatory Developments.",
    href: "/blog",
  },
  {
    image: "/images/brand/hero-red-stairs.jpg",
    heading: "Our Services",
    text: "Experienced. Strategic. Committed. We navigate complex legal challenges with precision, providing clear and effective solutions for every client.",
    href: "/our-services",
  },
];

const INTERVAL = 6500;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Highlights"
      className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-ink sm:min-h-[540px] lg:h-[660px]"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover object-top transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Keeps the white type readable over the brighter parts of the photo. */}
      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-28 sm:pb-20 sm:pt-40">
        {slides.map((slide, i) => (
          <div
            key={slide.heading}
            aria-hidden={i !== active}
            className={`transition-opacity duration-700 ${
              i === active ? "opacity-100" : "pointer-events-none absolute inset-x-6 bottom-14 opacity-0 sm:bottom-20"
            }`}
          >
            <Link href={slide.href} className="group block max-w-lg">
              <h1 className="text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-[3.25rem]">
                {slide.heading}
              </h1>
              <p className="mt-5 text-sm leading-relaxed tracking-wide text-white/90 transition-colors group-hover:text-white sm:text-base">
                {slide.text}
              </p>
            </Link>
          </div>
        ))}

        <div className="mt-8 flex gap-2.5">
          {slides.map((slide, i) => (
            <button
              key={slide.heading}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}: ${slide.heading}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
