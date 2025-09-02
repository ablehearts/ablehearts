interface GlassInfoProps {
  title: string;
  shortDescription: string;
  index: number;
}

export default function GlassInfo({
  title,
  shortDescription,
  index,
}: GlassInfoProps) {
  const titleColor = index % 2 === 0 ? "text-brand-dark" : "text-rose-600";

  return (
    <div className="mt-4 w-[85%] bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-md text-center">
      <h3 className={`text-xl font-semibold ${titleColor}`}>{title}</h3>
      <p className="text-gray-700 text-sm">{shortDescription}</p>
    </div>
  );
}
