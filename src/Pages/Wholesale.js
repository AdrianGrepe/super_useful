import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

import classes from './Wholesale.module.css'

import AboutUs1 from '../Images/Wholesales1.png';
import AboutUs2 from '../Images/Wholesales2.png';
import AboutUs3 from '../Images/Wholesales3.png';

import WholesalesBanner from '../Images/WholesalesBanner.png';

export default function Wholesale() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})

    const [FAQs, setFAQs] = useState() 
    const [questions, setQuestions] = useState()
   

    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-cms-a844104e433f.herokuapp.com/api/wholesale?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setPageContent(data.data.attributes)
                setIsLoadingContent(false)
            })
        fetch(`https://super-useful-cms-a844104e433f.herokuapp.com/api/faq-wholesales?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setFAQs(data.data)
                setQuestions(Object.keys(data.data).length)
                setIsLoadingContent(false)
            })
    }, [])

    // 

    return(
        <>
         <Header/>
        <section className={classes.Hero}>
            <img src={WholesalesBanner}></img>
        </section>
        <section className={classes.AboutUs}>
            <div className={classes.AboutUsTitle}>
                <h1>{pageContent.title}</h1>
            </div>
            <div className={classes.AboutUsContent}>
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs1}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>{pageContent.success_stories_title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(pageContent.success_stories_text)} />
                    </div>
                </div>
                <div style={{flexFlow:'row-reverse'}} className={classes.History}>
                    <div style={{padding:'5% 5% 5% 0%'}} className={classes.Image}>
                        <img src={AboutUs2}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>{pageContent.specialized_manufacturing_title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(pageContent.specialized_manufacturing_text)} />
                    </div>
                </div>
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs3}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>{pageContent.benefits_title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(pageContent.benefits_text)} />
                    </div>
                </div>
            </div>
           
        </section>
        <FAQ FAQs={FAQs} loadingContent={loadingContent}/>
        <Footer/>
        </>
    )
}