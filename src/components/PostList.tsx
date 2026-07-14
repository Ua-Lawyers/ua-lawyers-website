"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "@/data/posts";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function PostList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(posts.flatMap((p) => p.categories))).sort()],
    [posts],
  );

  const visible = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.categories.includes(active))),
    [active, posts],
  );

  return (
    <>
      <ul
        className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-hairline pb-3"
        role="tablist"
        aria-label="Filter by category"
      >
        {filters.map((f) => (
          <li key={f} role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                active === f ? "bg-brand text-white" : "text-ink-muted hover:text-brand"
              }`}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-10 space-y-8">
        {visible.map((p) => (
          <li key={p.slug}>
            <article className="grid gap-6 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
              <Link
                href={`/${p.slug}`}
                className="group relative block aspect-4/3 overflow-hidden rounded-md bg-white"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 16rem, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{p.categories.join(", ")}</span>
                </div>

                <h2 className="mt-2 text-2xl font-medium leading-snug">
                  <Link href={`/${p.slug}`} className="transition-colors hover:text-brand">
                    {p.heading}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.metaDesc}</p>

                <Link
                  href={`/${p.slug}`}
                  className="mt-5 inline-flex self-start text-sm font-semibold text-brand hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="mt-10 text-ink-muted">No articles in this category yet.</p>
      )}
    </>
  );
}
