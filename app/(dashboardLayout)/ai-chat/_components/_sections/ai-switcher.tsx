import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AI } from '@/constants/enums'
import { enumToArray } from '@/lib/enum'
import { Dispatch, FormEventHandler, SetStateAction } from 'react'

interface Props {
  label: string
  options: typeof AI
  selected?: string
  onChange: (value: string) => void
}

const Switcher = ({ label, options, selected, onChange }: Props) => {
  const list = enumToArray(options)
  return (
    <Select defaultValue={selected} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {list.keys.map((key, index) => (
            <SelectItem value={list.values[index]} key={key}>{key}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Switcher