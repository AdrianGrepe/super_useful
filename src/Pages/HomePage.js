import React from "react";


import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Search from "../Components/Search";
import TestimoniesCarousel from "../Components/TestimoniesCarousel";
import Footer from "../Components/Footer";

import bannerWeb from "../Videos/bannerWeb.mp4"

import WholesalesBanner from '../Images/WholesalesBanner.png';

import classes from './HomePage.module.css'

export default function HomePage() {

    
    
    return (
        <>
        <Header/>
        <section className={classes.bannerContainer}>
            <video style={{width:'100vw', maxWidth:'1200px' }} autoPlay controls loop={true}>
                <source src={bannerWeb} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <Carousel/>
        </section>
        <section>
            <Search/>
        </section>
        <section className={classes.SalesCounter} style={{height:'175px', width:'100vw', backgroundColor:'#e1530f'}}>
            <div className={classes.SalesCounterContent}>
                <div>
                    <h2 style={{color:'white', textTransform:'capitalize', fontSize:'36px'}}>nuestras ventas</h2>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ac odio at venenatis. Donec scelerisque finibus venenatis. Sed sed libero non velit pellentesque rhoncus. In fringilla sagittis vestibulum.</p>
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