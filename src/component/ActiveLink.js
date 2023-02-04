import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${props.className} ${activeClassName}`.trim()
      : props.className

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink