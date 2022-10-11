import React from 'react'
import { Link, Nav } from './styles'

export const NavBar = () => {
    return (
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/favs'>Favs</Link>
            <Link to='/user'>User</Link>
        </Nav>
    )
}
