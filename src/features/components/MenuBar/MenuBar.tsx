import React from 'react'
import { Link } from 'react-router-dom'
import style from './MenuBarStyle.module.css'

type Props = {}

const MenuBar = (props: Props) => {
    return (
        <div className={style.container}>
            <nav>
                <ul>
                    <li>
                        <Link to="/singup">Sing Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuBar