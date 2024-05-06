import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import LogoHeader from '../Images/LogoHeader.png';

import classes from './Header.module.css'

import { Link } from 'react-router-dom';

export default function Header(){

    const [currentPage, setCurrentPage] = useState()
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [menu_class, setMenuClass] = useState("menu hidden")

    let location = useLocation();

    const updateMenu = () => {
        if(!navbarOpen) {
            
            setMenuClass("visible")
            
        }
        else {
            
            setMenuClass("hidden")
        }
        setNavbarOpen(!navbarOpen)
    }

    return(
        <header className={classes.Header}>
        <div className={classes.ImageContainer}>
            <img style={{}} src={LogoHeader } alt="HeaderLogo" />
        </div>
        {
                    window.innerWidth < 991
                    ?
                    
                        <div onClick={updateMenu} className={classes.burgerButton}>
                            <div className={classes.bar}></div>
                            <div className={classes.bar}></div>
                            <div className={classes.bar}></div>
                        </div>
                
                    :
                    null
                }
        <div className={`${classes.LinksContainer} ${navbarOpen ? classes.visible: classes.hidden}` }>
            <div className={classes.Links} >
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/"?'#e1530f' : 'white', fontWeight:location.pathname === "/"?'bold' : 'normal'}}
                >
                    inicio
                </Link>
                <Link
                    to={`/nosotros`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/nosotros"?'#e1530f' : 'white', fontWeight:location.pathname === "/nosotros"?'bold' : 'normal'}}
                >
                    nosotros
                </Link>
                <Link
                    to={`/tienda`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/tienda"?'#e1530f' : 'white', fontWeight:location.pathname === "/tienda"?'bold' : 'normal'}}
                >
                    tienda
                </Link>
                <Link
                    to={`/mayoreo`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/mayoreo"?'#e1530f' : 'white', fontWeight:location.pathname === "/mayoreo"?'bold' : 'normal'}}
                >
                    mayoreo
                </Link>
                <Link
                    to={`/reclutamiento`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/reclutamiento"?'#e1530f' : 'white', fontWeight:location.pathname === "/reclutamiento"?'bold' : 'normal'}}
                >
                    reclutamiento
                </Link>
                <Link
                    to={`/contacto`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/contacto"?'#e1530f' : 'white', fontWeight:location.pathname === "/contacto"?'bold' : 'normal'}}
                >
                    contacto
                </Link>
            </div>
        </div>
        
        </header>
    )
}