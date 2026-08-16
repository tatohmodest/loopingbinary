export default function BrandMark({
  variant = "infinity",
  className = "",
}: {
  variant?: "infinity" | "word" | "loop";
  className?: string;
}) {
  const src =
    variant === "word"
      ? "/lblogo/looping_binary.png"
      : variant === "loop"
        ? "/lblogo/loop.png"
        : "/lblogo/infinity.png";
  const alt = variant === "infinity" ? "Looping Binary" : "Looping Binary";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`brand-mark brand-mark--${variant} ${className}`.trim()} src={src} alt={alt} />
  );
}
