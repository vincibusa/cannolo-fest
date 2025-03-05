import { MotionDiv } from "@/components/ui/motion-div";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-16 text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent inline-block">
        {title}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-red-600 mx-auto rounded-full"></div>
      {subtitle && (
        <p className="text-white/70 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </MotionDiv>
  );
}
