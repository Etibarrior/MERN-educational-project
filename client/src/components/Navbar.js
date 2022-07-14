import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return(
        <nav>
            <div className="nav-wrapper teal accent-3" style={{ padding: '0 2rem' }}>
                <span className="brand-logo black-text">Пробный сайт работает</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create" className="black-text">Создать</NavLink></li>
                    <li><NavLink to="/links" className="black-text">Ссылки</NavLink></li>
                    <li><a href="/" className="black-text" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}