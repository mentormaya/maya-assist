import { devnagariPaded } from "@/lib/numbers";

export const formatClock = (time: string, lang: string) => {
  if (lang === "np") {
    return `${devnagariPaded(time.split(" ")[0], 8)} ${time.split(" ")[1] == "AM" ? "पुर्वान्ह" : "अपरान्ह"}`;
  }
  return time;
};
