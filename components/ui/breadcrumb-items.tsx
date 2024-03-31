import { BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "./breadcrumb"

interface Props {
  path: string
  label: string
  separator?: boolean
}

const BreadCrumbItem = ({ path, label, separator = false }: Props) => {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink href={path} className="capitalize">{label}</BreadcrumbLink>
      </BreadcrumbItem>
      {separator && (
        <BreadcrumbSeparator />
      )}
    </>
  )
}

export default BreadCrumbItem