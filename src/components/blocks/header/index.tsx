import clsx from 'clsx'
import layoutStyles from '../../layout/layout.module.scss'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(layoutStyles.container, layoutStyles.grid)}>
        Home
      </div>
    </header>
  )
}