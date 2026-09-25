import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="grid grid-cols-1 sm:grid-cols-3">
      <p className="border-b border-ink px-4 py-3 text-section uppercase tracking-widest text-muted sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
        © {year} {profile.name}
      </p>
      <p className="border-b border-ink px-4 py-3 text-section uppercase tracking-widest text-muted sm:border-b-0 sm:border-r sm:px-6 sm:py-4">
        {profile.location} · Sharp edges, quiet interfaces
      </p>
      <a
        href="#top"
        className="px-4 py-3 text-section font-medium uppercase tracking-widest text-ink hover:bg-hatch focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink sm:px-6 sm:py-4"
      >
        Back to top
      </a>
    </footer>
  );
}
