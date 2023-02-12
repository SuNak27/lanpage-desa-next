import { useRouter } from 'next/router'
import Link from 'next/link'

type ActiveLinkProps = {
  activeClassName: string
  exactactiveclassname?: string
  children: React.ReactNode
  href: string
  as?: string
  className?: string
  onClick?: () => void
}

const ActiveLink = ({ children, activeClassName, ...props }: ActiveLinkProps) => {
  const { asPath, pathname } = useRouter()
  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${props.className} ${activeClassName}`.trim()
      : props.className

  const exactActiveClass = pathname.startsWith(props.href) && props.href !== '/' ? `${props.exactactiveclassname}`.trim() : ''

  return (
    <Link {...props} className={`${className} ${exactActiveClass}`}>
      {children}
    </Link>
  )
}

export default ActiveLink
