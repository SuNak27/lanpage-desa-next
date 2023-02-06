import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
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

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink