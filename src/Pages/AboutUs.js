import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import classes from './AboutUs.module.css'
// import WholesalesBanner from '../Images/WholesalesBanner.png';
import AboutUSBanner from '../Images/aboutUsBanner.png';
import AboutUs1 from '../Images/AboutUs1.png';
import AboutUs2 from '../Images/AboutUs2.png';
import AboutUs3 from '../Images/AboutUs3.png'

export default function AboutUs() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})
   

    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-cms-a844104e433f.herokuapp.com/api/about-us?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setPageContent(data.data.attributes)
                setIsLoadingContent(false)
            })
    }, [])


    return(
        <>
        <Header/>
        <section className={classes.Hero}>
            <img src={AboutUSBanner}></img>
        </section>
        <section className={classes.AboutUs}>
            <div className={classes.AboutUsTitle}>
                <h1>{pageContent.title}</h1>
                {console.log(pageContent.title)}
            </div>
            <div className={classes.AboutUsContent}>
                <div style={{position:'relative'}}>
                    <div style={{position:'absolute'}} className={classes.ImageMobile}>
                        <img src={AboutUs1}/>
                    </div>
                    <div className={classes.History}>
                        <div className={classes.ImageDesktop}>
                            <img src={AboutUs1}/>
                        </div>
                        <div className={classes.Text}>
                            <h2>{pageContent.values_title}</h2>
                            <div dangerouslySetInnerHTML={createMarkup(pageContent.values_text)} />
                        </div>
                    </div>
                </div>
                
                <div style={{position:'relative'}}>
                    <div style={{ position:'absolute'}} className={classes.ImageMobile}>
                        <img src={AboutUs2}/>
                    </div>
                    <div style={{flexFlow:'row-reverse'}} className={classes.History}>
                        <div style={{padding:'5% 5% 5% 0%'}} className={classes.ImageDesktop}>
                            <img src={AboutUs2}/>
                        </div>
                        <div className={classes.Text}>
                            <h2>{pageContent.mision_title}</h2>
                            <div dangerouslySetInnerHTML={createMarkup(pageContent.mision_text)} />
                        </div>
                    </div>
                </div>
                
                <div style={{position:'relative'}}>
                    <div style={{ position:'absolute'}} className={classes.ImageMobile}>
                        <img src={AboutUs3}/>
                    </div>
                    <div className={classes.History}>
                        <div className={classes.ImageDesktop}>
                            <img src={AboutUs3}/>
                        </div>
                        <div className={classes.Text}>
                            <h2>{pageContent.vision_title}</h2>
                            <div dangerouslySetInnerHTML={createMarkup(pageContent.vision_text)} />
                        </div>
                    </div>
                </div>
                

            </div>
           
        </section>
        <Footer/>
        </>
    )
}