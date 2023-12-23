import React from "react";
import LogoHeader from '../Images/LogoHeader.png';

import classes from './Header.module.css'

import { Link } from 'react-router-dom';

export default function Header(){
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
                >
                    inicio
                </Link>
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                >
                    tienda
                </Link>
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                >
                    mayoreo
                </Link>
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                >
                    reclutamiento
                </Link>
                <Link
                    to={`/`}
                    className={classes.HeaderLink}
                >
                    contacto
                </Link>
            </div>
        </div>
        
        </header>
    )
}