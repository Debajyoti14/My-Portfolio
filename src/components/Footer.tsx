export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-site flex-wrap gap-4 px-8 py-6 text-xs tracking-[.06em] text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]">
        <span>© {year} Debajyoti Saha. All rights reserved.</span>
      </div>
    </footer>
  );
}
