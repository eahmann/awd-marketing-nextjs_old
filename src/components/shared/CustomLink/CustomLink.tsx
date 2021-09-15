import Link from "next/link"

import { ILink } from "@models/ILink"

type Props = {
  link: ILink
  className?: string
}

const CustomLink: React.FC<Props> = ({ link, className, children }) => {
  const isInternalLink = link.href.startsWith("/")

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link.href}>
        <a className={className}>{children}</a>
      </Link>
    )
  }

  // Plain <a> tags for external links
  if (link.newTab) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <a href={link.href} target="_self" className={className}>
      {children}
    </a>
  )
}

export default CustomLink
