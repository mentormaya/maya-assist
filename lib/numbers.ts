const nep_unicode_numbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']

export const devnagari = (num: string) => {
  const nep_num = num.split("").map((n) => n === ":" ? n : nep_unicode_numbers[parseInt(n)]).join("")
  return nep_num
}