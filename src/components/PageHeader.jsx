function PageHeader({ eyebrow, title, children, compact = false }) {
  return (
    <header className={`container-page pb-10 ${compact ? 'pt-8' : 'pt-14 sm:pt-20'}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
      {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{children}</div>}
    </header>
  );
}

export default PageHeader;
