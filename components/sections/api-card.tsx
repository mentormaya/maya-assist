import { Button } from "@/components/ui/button"
import { Copy, RefreshCw } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label"
import { MouseEventHandler } from "react"

interface Props {
  title: string
  description?: string
  children: React.ReactNode
  message?: string
  refresh: MouseEventHandler<HTMLButtonElement> | undefined;
}


export function CardWithForm({ title, description, children, message = "Click on the referesh button to generate.", refresh }: Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button size="icon" variant="ghost" onClick={refresh}>
          <RefreshCw />
        </Button>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Label>{message}</Label>
      </CardFooter>
    </Card>
  )
}
