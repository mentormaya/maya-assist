import { devnagari } from "@/lib/numbers"

export const formatClock = (time: string, lang: string) => {
  if (lang === "np") {
    return `${devnagari(time.split(" ")[0])} ${time.split(" ")[1] == "AM" ? "पुर्वान्ह" : "अपरान्ह"}`
  }
  return time
}
