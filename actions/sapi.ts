"use server"

export const getDate = async () => {
  return (await fetch("https://sapi.deta.dev/date/today")).json()
}