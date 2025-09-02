import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  onWatch: () => void;
  index: number; // 👈 added for alternation
}

export default function ResponsiveImageCard({
  src,
  alt,
  title,
  shortDescription,
  longDescription,
  onWatch,
  index,
}: Props) {
  const [hovered, setHovered] = useState(false);

  // Alternate brand-dark and rose
  const titleColor = index % 2 === 0 ? "text-brand-light" : "text-rose-600";
  // for dark, text in white background
  const titleColorDark = index % 2 === 0 ? "text-brand-dark" : "text-rose-600";
  const descriptionColor = index % 2 === 0 ? "text-gray-700" : "text-gray-200";

  return (
    <div className="flex flex-col items-center">
      {/* Image + Overlay */}
      <motion.div
        className="relative w-[85%] rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-lg group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 text-white transition-opacity text-center"
        >
          <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
          <p className="text-sm md:text-base leading-relaxed max-h-[70%] overflow-y-auto custom-scrollbar">
            {longDescription}
          </p>
          <button
            onClick={onWatch}
            className="mt-6 bg-rose-600 hover:bg-rose-500 p-4 rounded-full shadow-md transition"
          >
            <Play className="w-8 h-8 text-white" />
          </button>
        </motion.div>
      </motion.div>

      {/* Glassmorphism Info Below */}
      <div className="mt-4 w-[85%] bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-md text-center">
        <h3 className={`text-xl font-semibold ${titleColorDark}`}>{title}</h3>
        <p className="text-gray-700 text-sm">{shortDescription}</p>
      </div>
    </div>
  );
}
