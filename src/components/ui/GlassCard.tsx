import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function GlassCard({
  children,
  className,
  intensity = 'medium',
  ...props
}: GlassCardProps) {
  const baseStyles = "relative overflow-hidden rounded-2xl border border-white/10 shadow-lg backdrop-blur-xl transition-all duration-300";
  
  const intensities = {
    low: "bg-white/5",
    medium: "bg-white/10",
    high: "bg-white/20",
  };

  return (
    <div
      className={twMerge(baseStyles, intensities[intensity], className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
