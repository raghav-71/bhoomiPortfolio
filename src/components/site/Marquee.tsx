export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-primary/20 py-4 sm:py-6 w-full max-w-[100vw]">
      <div className="animate-marquee flex w-max gap-6 sm:gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-6 sm:gap-10">
            <span className="font-display text-xl sm:text-3xl lg:text-4xl tracking-tight uppercase text-white">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#3B82F6]" />
          </span>
        ))}
      </div>
    </div>
  );
}
