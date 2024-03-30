const nep_unicode_numbers = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

export const devnagariPaded = (num: string, len: number) => {
  const nep_num = num
    .split("")
    .map((n) => (isNaN(parseInt(n)) ? n : nep_unicode_numbers[parseInt(n)]))
    .join("");
  
  if(nep_num.length < len) return nep_num.padStart(len, '०')
  return nep_num;
};
