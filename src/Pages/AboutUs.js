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
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs1}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>{pageContent.values_title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(pageContent.values_text)} />
                    </div>
                </div>
                <div style={{flexFlow:'row-reverse'}} className={classes.History}>
                    <div style={{padding:'5% 5% 5% 0%'}} className={classes.Image}>
                        <img src={AboutUs2}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>{pageContent.mision_title}</h2>
                        <div dangerouslySetInnerHTML={createMarkup(pageContent.mision_text)} />
                    </div>
                </div>
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs3}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>{pageContent.vision_title}</h2>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet volutpat ex, a dignissim tortor pellentesque interdum. Vivamus sem ipsum, consectetur et dignissim vitae, viverra a odio. Nulla id est ultricies nulla tincidunt congue. Mauris pretium dui eros, vel convallis diam convallis at. Phasellus ultricies finibus posuere. Duis vel facilisis tortor, et iaculis enim. Praesent eu porta urna. Pellentesque rhoncus justo sed urna condimentum tristique. Aenean non felis vel erat tempor consequat sit amet quis elit. Sed nisi lectus, auctor in sapien vel, semper maximus tortor. Aliquam sodales ac eros vel eleifend. Donec risus nunc, eleifend vitae nisi sit amet, fermentum tincidunt felis. Donec lacinia, nulla vel rutrum bibendum, nulla ipsum semper ipsum, eget molestie leo quam ac nisl. Proin vulputate id enim eu ullamcorper. Etiam vitae sapien turpis.
                            Praesent commodo molestie massa, ac semper tellus interdum pretium. Vestibulum feugiat facilisis lectus, in aliquam risus faucibus suscipit. Sed tellus lorem, maximus eget vulputate sit amet, consequat vitae felis. Duis arcu mauris, cursus viverra dui id, rhoncus dictum purus. Quisque pharetra nisl felis, a dictum nisi efficitur in. Aliquam vulputate vestibulum enim, id porta augue. Vivamus nec lacus libero.
                            Aliquam erat volutpat. Aliquam aliquet convallis varius. Vestibulum venenatis urna eu arcu tempor lobortis. Nullam consectetur orci nisi, eu accumsan nibh efficitur et. Suspendisse sagittis volutpat mi, id elementum eros lobortis in. Nunc quis augue eget sem ornare vestibulum at id lacus. Proin consectetur pharetra consequat. Maecenas eget turpis ullamcorper, volutpat augue sed, efficitur magna. Pellentesque dignissim tortor vitae mollis dignissim. Vivamus imperdiet ac dui sed ultrices. Suspendisse magna lectus, viverra vel eleifend at, volutpat sit amet magna. Nunc nunc orci, pellentesque sed volutpat in, lobortis venenatis massa.
                        </p> */}
                        <div dangerouslySetInnerHTML={createMarkup(pageContent.vision_text)} />
                    </div>
                </div>
            </div>
           
        </section>
        <Footer/>
        </>
    )
}