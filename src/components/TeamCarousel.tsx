"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { people } from "@/data/people";

export default function TeamCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByPage = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Shows 4 cards per view on desktop; swipe/scroll reveals the rest. */}
      <ul
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {people.map((person) => (
          <li
            key={person.slug}
            className="w-40 shrink-0 snap-start sm:w-48 lg:w-[calc((100%-3rem)/4)]"
          >
            <Link
              href={`/portfolio-item/${person.slug}`}
              className="group flex w-full flex-col"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-md bg-white">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 15vw, 45vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-b-md bg-white px-3 py-3 text-center">
                <p className="text-sm font-semibold transition-colors group-hover:text-brand">
                  {person.name}
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">{person.role}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Left / right controls (desktop only; phones use swipe). */}
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        aria-label="Previous team members"
        className="absolute left-0 top-[35%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-white p-2 text-ink shadow-md transition-colors hover:bg-brand hover:text-white lg:flex"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        aria-label="Next team members"
        className="absolute right-0 top-[35%] hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-white p-2 text-ink shadow-md transition-colors hover:bg-brand hover:text-white lg:flex"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
