import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dog } from '../Components/Assets/dogs.svg'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link  className={styles.logo} to="/" aria-label='Dog - Home'>
          <Dog /> 
        </Link>
        <Link className= {styles.login} to="/Login">Login / Criar Login</Link>
      </nav>
    </header>
  )
}
export default Header
