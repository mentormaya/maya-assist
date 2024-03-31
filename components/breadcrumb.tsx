"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import BreadCrumbItem from "./ui/breadcrumb-items"

const BreadCrumb = () => {
  const currentUrl = usePathname().split("/")
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {currentUrl.map((path, index) => {
          const key = index === 0 ? "/" : path;
          return (
            <BreadCrumbItem path={key} label={index === 0 ? "Home" : path} separator={index !== currentUrl.length - 1} key={key} />
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb