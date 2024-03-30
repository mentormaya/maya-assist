import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface Props {
  content: string
  children: React.ReactNode
  message?: React.ReactNode
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
  size?: "default" | "sm" | "lg" | "icon" | null | undefined
  className?: string | undefined
}

const CopyToClipboard = ({
  content,
  children,
  message = "Content has been copied to clipboard.",
  variant = "ghost",
  size = "icon",
  className,
}: Props) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "h-6 w-6 p-2",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(content);
        toast({
          variant: "success",
          description: message,
        })
      }}
    >
      {children}
    </Button>
  )
}

export default CopyToClipboard