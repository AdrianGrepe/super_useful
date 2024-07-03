import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import classes from './Terms&Conditions.module.css';

export default function TermsAndConditions() {

    function createMarkup(str) {
        return {__html: str};
    }

    const [loadingContent, setIsLoadingContent] = useState()
    const [pageContent, setPageContent] = useState({})


    useEffect(() => {
        setIsLoadingContent(true)
        fetch(`https://super-useful-strapi-0bbdc58e284a.herokuapp.com/api/terms-and-condition?populate=*`, { 
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
        <section className={classes.Container}>
            <h1 style={{margin:'50px 0'}}>{pageContent.title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(pageContent.text)} />
        </section>
        <Footer/>
        </>
    )
}