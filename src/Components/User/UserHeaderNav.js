import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MinhasFotos} from "../../imgs/feed.svg"
import {ReactComponent as Estatisticas} from "../../imgs/estatisticas.svg"
import {ReactComponent as AdicionarFoto} from "../../imgs/adicionar.svg"
import {ReactComponent as Sair} from "../../imgs/sair.svg"
import styles from "./UserHeaderNav.module.css"
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext)
  const mobile = useMedia("(max-width:40rem)")
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  },[pathname])

  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
    
  )
}

export default UserHeaderNav