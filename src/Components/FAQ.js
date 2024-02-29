import React, { useEffect, useState } from "react";

import classes from './FAQ.module.css'

export default function FAQ({FAQs={}, loadingContent}) {

    function createMarkup(str) {
        return {__html: str};
    }

    const QuestionAndAnswer = ({question, answer}) => {

        const [questionVisible, setQuestionVisible] = useState(false)
        
        return (
            <>
            <div className={classes.FAQElement}>
                <div 
                    className={classes.Question}
                    onClick={() => {
                        setQuestionVisible(!questionVisible)
                    }}
                    style={{cursor:'pointer'}}
                >
                    <div>
                        {question}
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible(!questionVisible)
                        }}
                        style={{cursor:'pointer'}}
                    >
                        <svg style={{rotate:questionVisible ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p><div dangerouslySetInnerHTML={createMarkup(answer)} /></p>
                    </div>
                    </>
                    :
                    <></>
                }
                
            </div>
            </>
        )
    }


    return(
        <>
        <section className={classes.FAQContainer}>

            <div className={classes.FAQTitle}>
                <h2>preguntas frecuentes</h2>
            </div>
 
            {
                loadingContent
                ?
                <></>
                :
                <>
                {
                    Object.values(FAQs).map(a => <QuestionAndAnswer key={a.id} question={a.attributes.question} answer={a.attributes.answer}/>)
                }   
                </>
            }

        </section>
        </>
    )
}