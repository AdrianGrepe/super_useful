import React, { useState, useEffect } from "react";


import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Search from "../Components/Search";
import TestimoniesCarousel from "../Components/TestimoniesCarousel";
import Footer from "../Components/Footer";

import bannerWeb from "../Videos/bannerWeb.mp4"
import bannerButtonImg from "../Images/bannerButtonImg.svg"

import { Link } from 'react-router-dom';

import WholesalesBanner from '../Images/WholesalesBanner.png';

import classes from './HomePage.module.css'

export default function HomePage() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})
    const [totalSales, setTotalSales] = useState({})


   

    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-strapi-0bbdc58e284a.herokuapp.com/api/homepage?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setPageContent(data.data.attributes)
                setIsLoadingContent(false)
            })
        fetch(`https://super-useful-strapi-0bbdc58e284a.herokuapp.com/api/total-sale`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setTotalSales(data.data.attributes.sales)
                setIsLoadingContent(false)
                console.log(data.data.attributes.sales.charAt(0))
                console.log(data.data.attributes.sales.charAt(1))
                console.log(data.data.attributes.sales.charAt(2))
                console.log(data.data.attributes.sales.charAt(3))
                console.log(data.data.attributes.sales.length)
            })
    

    }, [])

    
    return (
        <>
        <Header/>
        <section className={classes.bannerContainer}>
            <video style={{width:'100vw', maxWidth:'1200px' }} controlsList="nofullscreen" autoPlay="true" muted="true" loop="true" controls='' webkit-playsInLine="true" playsInLine="true">
                <source src={bannerWeb} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <a href="https://www.tienda.superutil.mx/" target="_blank" rel="noopener noreferrer" className={classes.bannerCallToAction}>
    <img src={bannerButtonImg} />
    <span style={{ marginRight: '15px' }}>Comprar</span>
</a>
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
                    {
                      totalSales.length >= 7
                      ?
                      <span className={classes}>Más de</span>
                      :
                      <></>  
                    }
                    <span>
                    {(() => {
                        if(totalSales.length >= 7) {
                            return (
                                <>9</>
                            )
                        } else if (totalSales.length === 6) {
                            return (
                                <>{totalSales.charAt(0)}</>
                            )
                        } else {
                            return (
                                <>0</>
                            )
                        }
                    })()}
                    </span>
                    <span>
                    {(() => {
                        if(totalSales.length >= 7) {
                            return (
                                <>9</>
                            )
                        } else if (totalSales.length === 6) {
                            return (
                                <>{totalSales.charAt(1)}</>
                            )
                        } else if (totalSales.length === 5) {
                            return (
                                <>{totalSales.charAt(0)}</>
                            )
                        } else {
                            return (
                                <>0</>
                            )
                        }
                    })()}
                    </span>
                    <span>  
                    {(() => {
                        if(totalSales.length >= 7) {
                            return (
                                <>9</>
                            )
                        }else if (totalSales.length === 6) {
                            return (
                                <>{totalSales.charAt(2)}</>
                            )
                        } else if (totalSales.length === 5) {
                            return (
                                <>{totalSales.charAt(1)}</>
                            )
                        } else if (totalSales.length === 4) {
                            return (
                                <>{totalSales.charAt(0)}</>
                            )
                        } else {
                            return (
                                <>0</>
                            )
                        }
                    })()}
                    </span>
                    <span>
                    {(() => {
                        if(totalSales.length >= 7) {
                            return (
                                <>9</>
                            )
                        }else if (totalSales.length === 6) {
                            return (
                                <>{totalSales.charAt(3)}</>
                            )
                        } else if (totalSales.length === 5) {
                            return (
                                <>{totalSales.charAt(2)}</>
                            )
                        } else if (totalSales.length === 4) {
                            return (
                                <>{totalSales.charAt(1)}</>
                            )
                        }else if (totalSales.length === 3) {
                            return (
                                <>{totalSales.charAt(0)}</>
                            )
                        } else {
                            return (
                                <>0</>
                            )
                        }
                    })()}
                    </span>
                    <span>
                    {(() => {
                        if(totalSales.length >= 7) {
                            return (
                                <>9</>
                            )
                        }else if (totalSales.length === 6) {
                            return (
                                <>{totalSales.charAt(4)}</>
                            )
                        } else if (totalSales.length === 5) {
                            return (
                                <>{totalSales.charAt(3)}</>
                            )
                        } else if (totalSales.length === 4) {
                            return (
                                <>{totalSales.charAt(2)}</>
                            )
                        }else if (totalSales.length === 3) {
                            return (
                                <>{totalSales.charAt(1)}</>
                            )
                        }else if (totalSales.length === 2) {
                            return (
                                <>{totalSales.charAt(0)}</>
                            )
                        } else {
                            return (
                                <>0</>
                            )
                        }
                    })()}
                    </span>
                    <span>
                    {(() => {
                        if(totalSales.length >= 7) {
                            return (
                                <>9</>
                            )
                        }else if (totalSales.length === 6) {
                            return (
                                <>{totalSales.charAt(5)}</>
                            )
                        } else if (totalSales.length === 5) {
                            return (
                                <>{totalSales.charAt(4)}</>
                            )
                        } else if (totalSales.length === 4) {
                            return (
                                <>{totalSales.charAt(3)}</>
                            )
                        }else if (totalSales.length === 3) {
                            return (
                                <>{totalSales.charAt(2)}</>
                            )
                        }else if (totalSales.length === 2) {
                            return (
                                <>{totalSales.charAt(1)}</>
                            )
                        } else if (totalSales.length === 1) {
                            return (
                                <>{totalSales.charAt(0)}</>
                            )
                        } else {
                            return (
                                <>0</>
                            )
                        }
                    })()}
                    </span>
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