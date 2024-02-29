import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import LogoHeader from '../Images/LogoHeader.png';

import classes from './Header.module.css'

import { Link } from 'react-router-dom';

export default function Header(){

    const [currentPage, setCurrentPage] = useState()

    let location = useLocation();

    console.log(location.pathname)

    return(
        <header className={classes.Header}>
        <div className={classes.ImageContainer}>
            <img style={{}} src={LogoHeader } alt="HeaderLogo" />
        </div>
        <div className={classes.LinksContainer}>
            <div className={classes.Links} >
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/"?'#e1530f' : 'white'}}
                >
                    inicio
                </Link>
                <Link
                    to={`/nosotros`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/nosotros"?'#e1530f' : 'white'}}
                >
                    nosotros
                </Link>
                <Link
                    to={`/tienda`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/tienda"?'#e1530f' : 'white'}}
                >
                    tienda
                </Link>
                <Link
                    to={`/mayoreo`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/mayoreo"?'#e1530f' : 'white'}}
                >
                    mayoreo
                </Link>
                <Link
                    to={`/reclutamiento`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/reclutamiento"?'#e1530f' : 'white'}}
                >
                    reclutamiento
                </Link>
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                    style={{color:location.pathname === "/contacto"?'#e1530f' : 'white'}}
                >
                    contacto
                </Link>
            </div>
        </div>
        
        </header>
    )
}