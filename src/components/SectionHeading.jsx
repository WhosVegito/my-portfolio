import { motion } from "framer-motion";

export default function SectionHeading({ number, title, align = "left" }) {
  return (
    <motion.div
      className={`mb-14 ${align === "center" ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Number tag */}
      <span
        className="block text-xs font-bold tracking-[0.35em] uppercase mb-3"
        style={{ color: "rgba(139,92,246,0.6)" }}
      >
        {number}
      </span>

      {/* Heading with hover shimmer */}
      <h2
        className="relative inline-block text-4xl font-extrabold text-slate-100 group"
        style={{ letterSpacing: "-0.01em" }}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:shimmer-text">
          {title}
        </span>

        {/* Animated underline bar */}
        <motion.span
          className="absolute left-0 -bottom-2 h-0.5 rounded-full"
          style={{
            background: "linear-gradient(90deg, #8b5cf6, #22d3ee, #8b5cf6)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
          initial={{ width: "0%" }}
          whileInView={{ width: align === "center" ? "100%" : "60%" }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Hover glow */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(139,92,246,0.18) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </h2>
    </motion.div>
  );
}
