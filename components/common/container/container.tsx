import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}

export function Container({ 
  children, 
  className 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-5xl mx-auto px-6",
        className
      )}
    >
      {children}
    </div>
  );
}