import { NavLink } from 'react-router-dom'

import { Timer, Scroll } from 'phosphor-react'
import LogoIgnite from '../../assets/ignite-logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
