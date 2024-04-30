import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CurrentTeamCarousel from "../Components/CurrentTeamCarousel";

import classes from './JoinUs.module.css'

import JoinUsImg from '../Images/JoinUs.png'


export default function JoinUs() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})

   

    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-cms-mysql-3b678b46df5f.herokuapp.com/api/be-part-of-our-team?populate=*`, { 
            'Content-Type': 'application/json' , method: 'GET' 
            })
            .then(data => data.json())
            .then(data => {
                setPageContent(data.data.attributes)
                setIsLoadingContent(false)
            })
        // fetch(`https://super-useful-cms-mysql-3b678b46df5f.herokuapp.com/api/faq-wholesales?populate=*`, { 
        //     'Content-Type': 'application/json' , method: 'GET' 
        //     })
        //     .then(data => data.json())
        //     .then(data => {
        //         setFAQs(data.data)
        //         setQuestions(Object.keys(data.data).length)
        //         setIsLoadingContent(false)
        //     })
    }, [])


    return(
        <>
        <Header/>
        <section className={classes.JoinSuperUsefull}>
            <div className={classes.JoinSuperUsefullTitle}>
                <h1>Se parte de nuestro <br/> equipo súper útil</h1>
            </div>
            <div className={classes.Advantages}>
                <div className={classes.AdvantagesImg}>
                    <img src={JoinUsImg}></img>
                </div>
                <div>
                    <h2>{pageContent.advantages_title}</h2>
                    <div dangerouslySetInnerHTML={createMarkup(pageContent.advantages_text)} />
                </div>
                
            </div>
        </section>
        <CurrentTeamCarousel/>
        <Footer/>
        </>
    )
}