import React, { useState, useEffect } from "react";


import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Search from "../Components/Search";
import TestimoniesCarousel from "../Components/TestimoniesCarousel";
import Footer from "../Components/Footer";

import bannerWeb from "../Videos/bannerWeb.mp4"

import WholesalesBanner from '../Images/WholesalesBanner.png';

import classes from './HomePage.module.css'

export default function HomePage() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})


   

    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-cms-mysql-3b678b46df5f.herokuapp.com/api/homepage?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setPageContent(data.data.attributes)
                setIsLoadingContent(false)
            })
    }, [])

    
    return (
        <>
        <Header/>
        <section className={classes.bannerContainer}>
            <video style={{width:'100vw', maxWidth:'1200px' }} controlsList="nofullscreen" autoPlay="true" loop="true" controls='' webkit-playsInLine="true" playsInLine="true">
                <source src={bannerWeb} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <Carousel title="Conoce los productos Súper Útil"/>
        </section>
        <section>
            <Search/>
        </section>
        <section className={classes.SalesCounter} style={{height:'175px', width:'100vw', backgroundColor:'#e1530f'}}>
            <div className={classes.SalesCounterContent}>
                <div>
                    <h2 style={{color:'white', textTransform:'capitalize', fontSize:'36px', margin:'0'}}>nuestras ventas</h2>
                </div>
                <div className={classes.salesCounter} >
                    <span>0</span>
                    <span>0</span>
                    <span>3</span>
                    <span>4</span>
                    <span>2</span>
                    <span>8</span>
                </div>
            </div>
        </section>
        <section className={classes.Wholesales}>
            <div className={classes.WholesalesContent}>
                <div className={classes.WholesalesText}>
                    <h2>mayoreo</h2>
                    <div dangerouslySetInnerHTML={createMarkup(pageContent.wholesale_text)} />
                </div>
                <div className={classes.WholesalesImage}>
                    <img style={{}} src={WholesalesBanner} alt="WholesalesBanner" />
                </div>
            </div>
        </section>
        <section>
            <TestimoniesCarousel title={"testimonios"}/>
        </section>
        <Footer/>
        </>
    )
}