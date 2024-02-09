import React, { useEffect, useState } from "react";

import classes from './FAQ.module.css'

export default function FAQ() {

    const [questionVisible, setQuestionVisible] = useState({
        "first":false,
        "second":false,
        "third":false,
        "fourth":false,
        "fifth":false,
        "sixth":false
    })

    // useEffect(() => {}, [questionVisible])


    return(
        <>
        <section className={classes.FAQContainer}>

            <div className={classes.FAQTitle}>
                <h2>preguntas frecuentes</h2>
            </div>

            <div className={classes.FAQElement}>
                <div className={classes.Question}>
                    <div>
                        ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible((prevState) => ({
                                ...prevState,
                                "first": !questionVisible.first,
                            }));
                        }}
                    >
                        <svg style={{rotate:questionVisible.first ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible.first 
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu augue, varius non vestibulum 
                            at, vestibulum sed ligula. Phasellus non consequat purus. Aliquam et magna arcu. Maecenas non diam 
                            tristique, finibus lorem sed, ullamcorper mauris. Mauris pretium placerat purus, a imperdiet velit 
                            faucibus ut. Phasellus neque mauris, luctus et libero eu, ultrices bibendum tellus. Fusce ac nisi sit 
                            amet lacus varius vulputate vulputate vitae orci. Quisque aliquet maximus neque, eu imperdiet velit tempor a. 
                            Proin at dui arcu. Integer dapibus eros eget elit vehicula, ullamcorper fringilla massa lobortis. 
                            Ut malesuada elit vel nibh elementum, ac accumsan dolor consectetur.
                        </p>
                    </div>
                    </>
                    :
                    <></>
                }
            </div>

            <div className={classes.FAQElement}>
                <div className={classes.Question}>
                    <div>
                        ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible((prevState) => ({
                                ...prevState,
                                "second": !questionVisible.second,
                            }));
                        }}
                    >
                        <svg style={{rotate:questionVisible.second ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible.second
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu augue, varius non vestibulum 
                            at, vestibulum sed ligula. Phasellus non consequat purus. Aliquam et magna arcu. Maecenas non diam 
                            tristique, finibus lorem sed, ullamcorper mauris. Mauris pretium placerat purus, a imperdiet velit 
                            faucibus ut. Phasellus neque mauris, luctus et libero eu, ultrices bibendum tellus. Fusce ac nisi sit 
                            amet lacus varius vulputate vulputate vitae orci. Quisque aliquet maximus neque, eu imperdiet velit tempor a. 
                            Proin at dui arcu. Integer dapibus eros eget elit vehicula, ullamcorper fringilla massa lobortis. 
                            Ut malesuada elit vel nibh elementum, ac accumsan dolor consectetur.
                        </p>
                    </div>
                    </>
                    :
                    <></>
                }
            </div>
            
            <div className={classes.FAQElement}>
                <div  className={classes.Question}>
                    <div>
                        ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible((prevState) => ({
                                ...prevState,
                                "third": !questionVisible.third,
                            }));
                        }}
                    >
                        <svg style={{rotate:questionVisible.third ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible.third 
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu augue, varius non vestibulum 
                            at, vestibulum sed ligula. Phasellus non consequat purus. Aliquam et magna arcu. Maecenas non diam 
                            tristique, finibus lorem sed, ullamcorper mauris. Mauris pretium placerat purus, a imperdiet velit 
                            faucibus ut. Phasellus neque mauris, luctus et libero eu, ultrices bibendum tellus. Fusce ac nisi sit 
                            amet lacus varius vulputate vulputate vitae orci. Quisque aliquet maximus neque, eu imperdiet velit tempor a. 
                            Proin at dui arcu. Integer dapibus eros eget elit vehicula, ullamcorper fringilla massa lobortis. 
                            Ut malesuada elit vel nibh elementum, ac accumsan dolor consectetur.
                        </p>
                    </div>
                    </>
                    :
                    <></>
                }
            </div>

            <div className={classes.FAQElement}>
                <div  className={classes.Question}>
                    <div>
                        ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible((prevState) => ({
                                ...prevState,
                                "fourth": !questionVisible.fourth,
                            }));
                        }}
                    >
                        <svg style={{rotate:questionVisible.fourth ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible.fourth
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu augue, varius non vestibulum 
                            at, vestibulum sed ligula. Phasellus non consequat purus. Aliquam et magna arcu. Maecenas non diam 
                            tristique, finibus lorem sed, ullamcorper mauris. Mauris pretium placerat purus, a imperdiet velit 
                            faucibus ut. Phasellus neque mauris, luctus et libero eu, ultrices bibendum tellus. Fusce ac nisi sit 
                            amet lacus varius vulputate vulputate vitae orci. Quisque aliquet maximus neque, eu imperdiet velit tempor a. 
                            Proin at dui arcu. Integer dapibus eros eget elit vehicula, ullamcorper fringilla massa lobortis. 
                            Ut malesuada elit vel nibh elementum, ac accumsan dolor consectetur.
                        </p>
                    </div>
                    </>
                    :
                    <></>
                }
            </div>

            <div className={classes.FAQElement}>
                <div  className={classes.Question}>
                    <div>
                        ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible((prevState) => ({
                                ...prevState,
                                "fifth": !questionVisible.fifth,
                            }));
                        }}
                    >
                        <svg style={{rotate:questionVisible.fifth ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible.fifth
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu augue, varius non vestibulum 
                            at, vestibulum sed ligula. Phasellus non consequat purus. Aliquam et magna arcu. Maecenas non diam 
                            tristique, finibus lorem sed, ullamcorper mauris. Mauris pretium placerat purus, a imperdiet velit 
                            faucibus ut. Phasellus neque mauris, luctus et libero eu, ultrices bibendum tellus. Fusce ac nisi sit 
                            amet lacus varius vulputate vulputate vitae orci. Quisque aliquet maximus neque, eu imperdiet velit tempor a. 
                            Proin at dui arcu. Integer dapibus eros eget elit vehicula, ullamcorper fringilla massa lobortis. 
                            Ut malesuada elit vel nibh elementum, ac accumsan dolor consectetur.
                        </p>
                    </div>
                    </>
                    :
                    <></>
                }
            </div>

            <div className={classes.FAQElement}>
                <div className={classes.Question}>
                    <div>
                        ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </div>
                    <button 
                        onClick={() => {
                            setQuestionVisible((prevState) => ({
                                ...prevState,
                                "sixth": !questionVisible.sixth,
                            }));
                        }}
                    >
                        <svg style={{rotate:questionVisible.sixth    ?'-180deg' : ''}} width="24" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.82087e-08 0.645339C-2.2496e-08 0.514648 0.0318498 0.383945 0.106151 0.266323C0.275983 -0.0211985 0.615643 -0.0865649 0.84916 0.122541L8.0033 6.52646L15.1575 0.122542C15.391 -0.0865643 15.7306 -0.0211978 15.9005 0.266323C16.0703 0.553845 16.0172 0.972073 15.7837 1.18118L8.31113 7.87258C8.13068 8.04248 7.87594 8.04248 7.68488 7.87258L0.222895 1.18118C0.0849065 1.05049 -3.73478e-08 0.854418 -2.87788e-08 0.658381L-2.82087e-08 0.645339Z" fill="white"/>
                        </svg>

                    </button>
                </div>
                {
                    questionVisible.sixth
                    ?
                    <>
                    <div className={classes.Answer}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu augue, varius non vestibulum 
                            at, vestibulum sed ligula. Phasellus non consequat purus. Aliquam et magna arcu. Maecenas non diam 
                            tristique, finibus lorem sed, ullamcorper mauris. Mauris pretium placerat purus, a imperdiet velit 
                            faucibus ut. Phasellus neque mauris, luctus et libero eu, ultrices bibendum tellus. Fusce ac nisi sit 
                            amet lacus varius vulputate vulputate vitae orci. Quisque aliquet maximus neque, eu imperdiet velit tempor a. 
                            Proin at dui arcu. Integer dapibus eros eget elit vehicula, ullamcorper fringilla massa lobortis. 
                            Ut malesuada elit vel nibh elementum, ac accumsan dolor consectetur.
                        </p>
                    </div>
                    </>
                    :
                    <></>
                }
            </div>

        </section>
        </>
    )
}