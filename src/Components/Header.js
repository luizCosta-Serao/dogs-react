import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import {ReactComponent as Dogs} from "../imgs/dogs.svg"
import { UserContext } from '../UserContext'

const Header = () => {
  const {data} = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} aria-label='Dogs - Home' to="/">
          <Dogs/>
        </Link >
        {data ? <Link className={styles.login} to="/conta">
          {data.nome}
        </Link > : <Link className={styles.login} to="/login">
          Login / Criar
        </Link >}
      </nav>
    </header>
  )
}

export default Header