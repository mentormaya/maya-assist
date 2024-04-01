"use client"

import menus from "@/constants/side_menu.json"
import { cn } from "@/lib/utils"
import { icons } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const SideBarMenu = () => {
  const currentUrl = usePathname()
  return (
    <section className="flex grow flex-col my-2 px-4 gap-2">
      <h1 className="text-center text-lg">Menu</h1>
      {menus.map((menu) => {
        //@ts-ignore
        const Icon = icons[menu.icon]
        return (
          <Link href={menu.link} key={menu.link} className={cn(
            "flex justify-start gap-4 content-center p-2 hover:bg-slate-500/60 rounded",
            currentUrl === menu.link && "bg-slate-500/60"
          )}>
            <Icon />
            {menu.label}
          </Link>
        )
      })}
    </section>
  )
}

export default SideBarMenu