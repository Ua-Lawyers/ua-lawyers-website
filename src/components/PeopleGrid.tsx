"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Entry = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  areas: string[];
};

export default function PeopleGrid({
  entries,
  filters,
}: {
  entries: Entry[];
  filters: string[];
}) {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? entries : entries.filter((e) => e.areas.includes(active))),
    [active, entries],
  );

  return (
    <>
      <ul
        className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-hairline pb-3"
        role="tablist"
        aria-label="Filter by practice area"
      >
        {filters.map((f) => (
          <li key={f} role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-brand text-white"
                  : "text-ink-muted hover:text-brand"
              }`}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((person) => (
          <li key={person.slug} className="flex">
            <Link
              href={`/portfolio-item/${person.slug}`}
              className="group flex w-full flex-col"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-md bg-white">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-b-md bg-white px-3 py-3.5 text-center">
                <h3 className="text-sm font-semibold transition-colors group-hover:text-brand">
                  {person.name}
                </h3>
                <p className="mt-0.5 text-xs text-ink-muted">{person.role}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="mt-12 text-ink-muted">No team members in this practice area yet.</p>
      )}
    </>
  );
}
