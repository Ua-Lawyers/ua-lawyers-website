/**
 * One line icon per practice area, matching the icon list the live site shows next to each
 * service name on the home page. Keyed by service slug; falls back to a document glyph.
 */
const paths: Record<string, React.ReactNode> = {
  "commercial-litigation": (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  "corporate-commercial": (
    <>
      <path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 9h3M8 13h3M8 17h3" />
    </>
  ),
  "migration-law": <path d="M21 15.5 3 10V7l2.5.8 1.7 2.2 4.3 1.3V4.5L14 5l2 6.6 5 1.6z" />,
  "family-law": (
    <>
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  "property-law": (
    <>
      <path d="M4 20h9M6.5 16.5 13 10" />
      <path d="m13.5 4.5 6 6-2.5 2.5-6-6z" />
      <path d="m10.5 7.5 6 6" />
    </>
  ),
  "intellectual-property": (
    <>
      <path d="M9.5 17h5M10 20h4" />
      <path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.4-1 1-1 1.7v.4h-5v-.4c0-.7-.4-1.3-1-1.7A6 6 0 0 1 12 3Z" />
    </>
  ),
  "will-probate": (
    <>
      <path d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M15 3v4h4M8.5 13.5l2 2 4-4" />
    </>
  ),
  "criminal-defence": (
    <>
      <path d="M12 4v16M7 20h10M3.5 9h7l-3.5 5zM13.5 9h7l-3.5 5z" />
      <path d="M3.5 14a3.5 3.5 0 0 0 7 0M13.5 14a3.5 3.5 0 0 0 7 0M5 6.5h14" />
    </>
  ),
  "notary-public": (
    <>
      <circle cx="12" cy="8" r="4.5" />
      <path d="M8 12.5 6.5 21l5.5-2.5L17.5 21 16 12.5" />
    </>
  ),
  "employment-law": (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="1.5" />
      <path d="M9 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5v2M3 12.5h18" />
    </>
  ),
};

export default function ServiceIcon({
  slug,
  className = "h-6 w-6",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[slug] ?? paths["commercial-litigation"]}
    </svg>
  );
}
