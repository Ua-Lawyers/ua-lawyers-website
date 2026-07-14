import Image from "next/image";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  aside,
  crumbs = [],
  image = "/images/brand/hero-wavy-red.jpg",
  align = "left",
  /** `light` is for the pale abstract backdrop the live site uses on lawyer profiles. */
  tone = "dark",
  className = "",
  children,
}: {
  title: string;
  subtitle?: string;
  aside?: React.ReactNode;
  crumbs?: Crumb[];
  image?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}) {
  const onDark = tone === "dark";

  return (
    <section
      className={`relative isolate overflow-hidden ${onDark ? "bg-ink" : "bg-section"} ${className}`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {onDark && <div className="absolute inset-0 bg-black/25" />}

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <nav aria-label="Breadcrumb">
          <ol
            className={`flex flex-wrap items-center gap-1.5 text-xs ${
              align === "center" ? "justify-center" : ""
            } ${onDark ? "text-white/80" : "text-ink-muted"}`}
          >
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span className={onDark ? "text-white" : "text-ink"}>{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div
          className={`mt-6 gap-10 ${aside ? "md:flex md:items-end md:justify-between" : ""} ${
            align === "center" ? "text-center" : ""
          }`}
        >
          <div>
            <h1
              className={`text-3xl font-semibold tracking-tight sm:text-5xl ${
                onDark ? "text-white" : "text-ink"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`mt-3 text-lg sm:text-xl ${
                  onDark ? "text-white/85" : "text-ink-muted"
                }`}
              >
                {subtitle}
              </p>
            )}
            {children}
          </div>

          {aside && (
            <div
              className={`mt-6 max-w-sm text-sm leading-relaxed md:mt-0 ${
                onDark ? "text-white/85" : "text-ink-muted"
              }`}
            >
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
