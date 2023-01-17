import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Login">Login / Criar Login</Link>

      </nav>
    </div>
  )
}

export default Header
