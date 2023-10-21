'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import layout from '../layout.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

type Props = {
  links: Array<Parameters<typeof ListItem>[0]>
}

export const Navigation = (props: Props) => {
  const { links } = props

  const [isMobileActive, setIsMobileActive] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <nav className={clsx(layout.container, styles.navigation)}>
        <Link href={'/'} className={styles.title}>Floris de Graaff</Link>
        <menu className={clsx(styles.desktopMenu, { [styles.active]: isMobileActive })}>
          {links.map((link, key) => (
            <ListItem key={key} {...link} />
          ))}
        </menu>
        <menu className={clsx(styles.mobileMenu, { [styles.active]: isMobileActive })}>
          <ListItem href={'/'}>Home</ListItem>
          {links.map((link, key) => (
            <ListItem key={key} {...link} onClick={() => setIsMobileActive(false)} />
          ))}
        </menu>
        <button
          className={clsx(styles.mobileButton, {
            [styles.active]: isMobileActive
          })}
          onClick={() => setIsMobileActive(!isMobileActive)}
        >
          <div>
            <hr />
            <hr />
            <hr />
          </div>
        </button>
      </nav>
    </header>
  )
}

const ListItem = (props: {} & Parameters<typeof Link>[0]) => {
  const path = usePathname();
  const isActive = useMemo(() => {
    return path === props.href
  }, [path, props.href])
  return (
    <li>
      <Link {...props} className={clsx(styles.link, {
        [styles.active]: isActive
      })} />
    </li>
  )
}