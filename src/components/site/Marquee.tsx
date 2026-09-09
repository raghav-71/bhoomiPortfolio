export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-2xl tracking-tight uppercase sm:text-4xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#3B82F6]" />
          </span>
        ))}
      </div>
    </div>
  );
}
