export function Skeleton({ height = 220, radius = 24 }: { height?: number; radius?: number }) {
  return <div className="skeleton" style={{ height, borderRadius: radius }} aria-hidden="true" />;
}

export function ProjectSkeletons({ count = 4 }: { count?: number }) {
  return (
    <div className="portfolio-grid" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <div className="skeleton" style={{ height: 340, borderRadius: 32 }} key={index} />
      ))}
    </div>
  );
}
