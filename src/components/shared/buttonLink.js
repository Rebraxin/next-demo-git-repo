import React from 'react'
import Link from 'next/link'
import classes from '../../modules/buttonLink.module.scss'

const ButtonLink = (props) => {
  const { href, text, type = 'primary', target, external } = props

  const types = {
    primary: 'is-primary',
    success: 'is-success',
    danger: 'is-danger',
    dark: 'is-dark',
    light: 'is-light',
  }

  const buttonClass = `button ${types[type]}`

  if (external) {
    return (
      <div className={classes.button}>
        <a className={buttonClass} target={target} href={href}>
          {text}
        </a>
      </div>
    )
  }

  return (
    <div className={classes.button}>
      <Link href={href}>
        <a className={buttonClass} target={target}>
          {text}
        </a>
      </Link>
    </div>
  )
}

export default ButtonLink
