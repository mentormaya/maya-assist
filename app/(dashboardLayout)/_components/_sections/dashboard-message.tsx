"use client"

import useSWR from 'swr'
import { Sunrise } from 'lucide-react'

import MessageBoard from '@/components/sections/message-board'
import { endpoint, getRandomQuote } from '@/fetchers/quotes'

const DashboardMessage = () => {
  const { data: quote, isLoading } = useSWR(endpoint, getRandomQuote);
  return (
    <MessageBoard
      title="Good Morning, Ajay"
      description={isLoading ? "Loading a quote..." : `${quote.content} - ${quote.author}`}
    >
      <Sunrise className="h-6 w-6" />
    </MessageBoard>
  )
}

export default DashboardMessage