import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface Props {
  title: string
  description?: string
  children?: React.ReactNode
  variant?: "default" | "destructive" | "success" | null | undefined
}

const MessageBoard = ({ title = "Message Board", description = "You can add components and dependencies to your app using the cli.", children, variant }: Props) => {
  return (
    <Alert variant={variant}>
      {children}
      <AlertTitle>{title}</AlertTitle>
      {description && (
        <AlertDescription>
          {description}
        </AlertDescription>
      )}
    </Alert>
  )
}

export default MessageBoard