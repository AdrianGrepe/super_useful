import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import TextArea from "../Components/Textarea";
import GoogleMap from "../Components/GoogleMap";

import classes from './Contact.module.css'

import phoneLogo from '../Images/ICONO-TELEFONO.png';
import emailLogo from '../Images/ICONO-MAIL.png';
import locationLogo from '../Images/ICONO-UBICACION.png'

export default function Contact() {

    const [status, setStatus] = useState("notSubmitted");

    const [request, setRequest] = useState({
        name: '',
        about: '',
        email:'',
        body:''
    })

    const initError = {
        exists: false,
        helperText: null,
    };

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredAboutTouched, setEnteredAboutTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredBodyTouched, setEnteredBodyTouched] = useState(false);

    const [nameError, setNameError] = useState(initError);
    const [aboutError, setAboutError] = useState(initError);
    const [emailError, setEmailError] = useState(initError);
    const [bodyError, setBodyError] = useState(initError);

    useEffect(() => {
        if (!request.name && enteredNameTouched) {
            setNameError({
              exists: true,
              helperText: "Escribe tu nombre",
            });
        } else {
            setNameError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.about && enteredAboutTouched) {
            setAboutError({
              exists: true,
              helperText: "Escribe el asunto",
            });
        } else {
            setAboutError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.email && enteredEmailTouched) {
            setEmailError({
              exists: true,
              helperText: "Escribe el un correo electrónico",
            });
        } else {
            setEmailError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.body && enteredBodyTouched) {
            setBodyError({
              exists: true,
              helperText: "Escribe un mensaje",
            });
        } else {
            setBodyError({
              exists: false,
              helperText: null,
            });
        }
    }, [request, enteredNameTouched, enteredAboutTouched, enteredEmailTouched])

    const nameIsValid = !nameError.exists && enteredNameTouched;
    const aboutIsValid = !aboutError.exists && enteredAboutTouched;

    const nameBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        setRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setEnteredNameTouched(true);
        setEnteredAboutTouched(true);
        setEnteredEmailTouched(true);
        setEnteredBodyTouched(true);


        if (!nameIsValid) {
            return;
        }
        if (!aboutIsValid) {
            return;
        }

        fetch("https://super-useful-strapi-0bbdc58e284a.herokuapp.com/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {data:{...request}}
            ),
            })
            .then((response) => response.json())
            .then((data) => setStatus("Submitted"));
    };

    return(
        <>
        <Header/>
        <section className={classes.ContactContainer}>
            <div className={classes.Contact} >
                <div className={classes.ContactInfoWeb}>
                    <div>
                        <div style={{display:'flex'}}>
                            <img src={phoneLogo} />
                            <span>55 4002 8524</span>
                        </div>
                        <div style={{display:'flex'}}>
                            <img src={emailLogo} />
                            <span>contacto@superutil.mx</span>
                        </div>
                        <div style={{display:'flex'}}>
                            <img height={"21px"} src={locationLogo} />
                            <span>avenida independencia <br/> #1320, Toluca <br/> Estado de México</span>
                        </div>
                    </div>
                    <div >
                        <GoogleMap/>
                    </div>
                </div>
                {
                    status === "notSubmitted"
                    ?
                    <>
                    <form  style={{position:'relative'}} onSubmit={handleSubmit}>
                        <h1>Contacto</h1>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"name"}
                                type = {"text"}
                                name = {"name"}
                                placeholder = {"NOMBRE"}
                                value={request.txt}
                                handleChange={handleChange}
                                handleBlur={nameBlurHandler}
                                className={nameError.exists ? "is-invalid": ""}
                                errorDiv = {nameError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {nameError.helperText}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"about"}
                                type = {"text"}
                                name = {"about"}
                                placeholder = {"ASUNTO"}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                className={aboutError.exists ? "is-invalid": ""}
                                errorDiv = {aboutError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {aboutError.helperText}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"email"}
                                type = {"text"}
                                name = {"email"}
                                placeholder = {"CORREO ELECTRÓNICO"}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                className={emailError.exists ? "is-invalid": ""}
                                errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {emailError.helperText}
                            /> 
                        </div>
                        <TextArea 
                            placeholder="MENSAJE"
                            name="body" 
                            handleChange={handleChange} 
                            // handleBlur={commentBlurHandler}
                            style={{height:'150px', resize:'none', borderRadius:'5px', padding:'10px',}}
                            className={bodyError.exists ? "is-invalid": ""}
                            errorDiv = {bodyError.exists ? "text-danger" : "no-danger"}
                            errorMsg = {bodyError.helperText}
                            // writtenCharacters ={feedback.comment.length}
                        />
                        <button>Enviar</button>
                    </form>
                    </>
                    :
                    <>
                    <div className={classes.SubmittedMessage}>
                        <h2>En la brevedad nos pondremos en contacto contigo</h2>
                    </div>
                    </>
                }
                
            </div>
            <div className={classes.ContactInfoMobile}>
                <div>
                    <div style={{display:'flex'}}>
                        <img src={phoneLogo} />
                        <span>55 4002 8524</span>
                    </div>
                    <div style={{display:'flex'}}>
                        <img src={emailLogo} />
                        <span>contacto@superutil.mx</span>
                    </div>
                    <div style={{display:'flex'}}>
                        <img height={"21px"} src={locationLogo} />
                        <span>avenida independencia <br/> #1320, Toluca <br/> Estado de México</span>
                    </div>
                </div>
                <div >
                    <GoogleMap/>
                </div>
            </div>
            
        </section>
        <Footer/>
        </>
    )
}

// AIzaSyBsptCN9-LH5vQPCON8mZDBG2pGQYQnS8c