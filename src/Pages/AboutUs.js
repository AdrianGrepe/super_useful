import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import classes from './AboutUs.module.css'
import WholesalesBanner from '../Images/WholesalesBanner.png';
import AboutUs1 from '../Images/AboutUs1.jpg';
import AboutUs2 from '../Images/AboutUs2.jpeg';
import AboutUs3 from '../Images/AboutUs3.jpeg'

export default function AboutUs() {
    return(
        <>
        <Header/>
        <section className={classes.Hero}>
            <img src={WholesalesBanner}></img>
        </section>
        <section className={classes.AboutUs}>
            <div className={classes.AboutUsTitle}>
                <h1>¿quiénes somos?</h1>
            </div>
            <div className={classes.AboutUsContent}>
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs1}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>historia</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet volutpat ex, a dignissim tortor pellentesque interdum. Vivamus sem ipsum, consectetur et dignissim vitae, viverra a odio. Nulla id est ultricies nulla tincidunt congue. Mauris pretium dui eros, vel convallis diam convallis at. Phasellus ultricies finibus posuere. Duis vel facilisis tortor, et iaculis enim. Praesent eu porta urna. Pellentesque rhoncus justo sed urna condimentum tristique. Aenean non felis vel erat tempor consequat sit amet quis elit. Sed nisi lectus, auctor in sapien vel, semper maximus tortor. Aliquam sodales ac eros vel eleifend. Donec risus nunc, eleifend vitae nisi sit amet, fermentum tincidunt felis. Donec lacinia, nulla vel rutrum bibendum, nulla ipsum semper ipsum, eget molestie leo quam ac nisl. Proin vulputate id enim eu ullamcorper. Etiam vitae sapien turpis.
                            Praesent commodo molestie massa, ac semper tellus interdum pretium. Vestibulum feugiat facilisis lectus, in aliquam risus faucibus suscipit. Sed tellus lorem, maximus eget vulputate sit amet, consequat vitae felis. Duis arcu mauris, cursus viverra dui id, rhoncus dictum purus. Quisque pharetra nisl felis, a dictum nisi efficitur in. Aliquam vulputate vestibulum enim, id porta augue. Vivamus nec lacus libero.
                            Aliquam erat volutpat. Aliquam aliquet convallis varius. Vestibulum venenatis urna eu arcu tempor lobortis. Nullam consectetur orci nisi, eu accumsan nibh efficitur et. Suspendisse sagittis volutpat mi, id elementum eros lobortis in. Nunc quis augue eget sem ornare vestibulum at id lacus. Proin consectetur pharetra consequat. Maecenas eget turpis ullamcorper, volutpat augue sed, efficitur magna. Pellentesque dignissim tortor vitae mollis dignissim. Vivamus imperdiet ac dui sed ultrices. Suspendisse magna lectus, viverra vel eleifend at, volutpat sit amet magna. Nunc nunc orci, pellentesque sed volutpat in, lobortis venenatis massa.
                        </p>
                    </div>
                </div>
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs2}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>misión</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet volutpat ex, a dignissim tortor pellentesque interdum. Vivamus sem ipsum, consectetur et dignissim vitae, viverra a odio. Nulla id est ultricies nulla tincidunt congue. Mauris pretium dui eros, vel convallis diam convallis at. Phasellus ultricies finibus posuere. Duis vel facilisis tortor, et iaculis enim. Praesent eu porta urna. Pellentesque rhoncus justo sed urna condimentum tristique. Aenean non felis vel erat tempor consequat sit amet quis elit. Sed nisi lectus, auctor in sapien vel, semper maximus tortor. Aliquam sodales ac eros vel eleifend. Donec risus nunc, eleifend vitae nisi sit amet, fermentum tincidunt felis. Donec lacinia, nulla vel rutrum bibendum, nulla ipsum semper ipsum, eget molestie leo quam ac nisl. Proin vulputate id enim eu ullamcorper. Etiam vitae sapien turpis.
                            Praesent commodo molestie massa, ac semper tellus interdum pretium. Vestibulum feugiat facilisis lectus, in aliquam risus faucibus suscipit. Sed tellus lorem, maximus eget vulputate sit amet, consequat vitae felis. Duis arcu mauris, cursus viverra dui id, rhoncus dictum purus. Quisque pharetra nisl felis, a dictum nisi efficitur in. Aliquam vulputate vestibulum enim, id porta augue. Vivamus nec lacus libero.
                            Aliquam erat volutpat. Aliquam aliquet convallis varius. Vestibulum venenatis urna eu arcu tempor lobortis. Nullam consectetur orci nisi, eu accumsan nibh efficitur et. Suspendisse sagittis volutpat mi, id elementum eros lobortis in. Nunc quis augue eget sem ornare vestibulum at id lacus. Proin consectetur pharetra consequat. Maecenas eget turpis ullamcorper, volutpat augue sed, efficitur magna. Pellentesque dignissim tortor vitae mollis dignissim. Vivamus imperdiet ac dui sed ultrices. Suspendisse magna lectus, viverra vel eleifend at, volutpat sit amet magna. Nunc nunc orci, pellentesque sed volutpat in, lobortis venenatis massa.
                        </p>
                    </div>
                </div>
                <div className={classes.History}>
                    <div className={classes.Image}>
                        <img src={AboutUs3}/>
                    </div>
                    <div className={classes.Text}>
                        <h2>visión</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet volutpat ex, a dignissim tortor pellentesque interdum. Vivamus sem ipsum, consectetur et dignissim vitae, viverra a odio. Nulla id est ultricies nulla tincidunt congue. Mauris pretium dui eros, vel convallis diam convallis at. Phasellus ultricies finibus posuere. Duis vel facilisis tortor, et iaculis enim. Praesent eu porta urna. Pellentesque rhoncus justo sed urna condimentum tristique. Aenean non felis vel erat tempor consequat sit amet quis elit. Sed nisi lectus, auctor in sapien vel, semper maximus tortor. Aliquam sodales ac eros vel eleifend. Donec risus nunc, eleifend vitae nisi sit amet, fermentum tincidunt felis. Donec lacinia, nulla vel rutrum bibendum, nulla ipsum semper ipsum, eget molestie leo quam ac nisl. Proin vulputate id enim eu ullamcorper. Etiam vitae sapien turpis.
                            Praesent commodo molestie massa, ac semper tellus interdum pretium. Vestibulum feugiat facilisis lectus, in aliquam risus faucibus suscipit. Sed tellus lorem, maximus eget vulputate sit amet, consequat vitae felis. Duis arcu mauris, cursus viverra dui id, rhoncus dictum purus. Quisque pharetra nisl felis, a dictum nisi efficitur in. Aliquam vulputate vestibulum enim, id porta augue. Vivamus nec lacus libero.
                            Aliquam erat volutpat. Aliquam aliquet convallis varius. Vestibulum venenatis urna eu arcu tempor lobortis. Nullam consectetur orci nisi, eu accumsan nibh efficitur et. Suspendisse sagittis volutpat mi, id elementum eros lobortis in. Nunc quis augue eget sem ornare vestibulum at id lacus. Proin consectetur pharetra consequat. Maecenas eget turpis ullamcorper, volutpat augue sed, efficitur magna. Pellentesque dignissim tortor vitae mollis dignissim. Vivamus imperdiet ac dui sed ultrices. Suspendisse magna lectus, viverra vel eleifend at, volutpat sit amet magna. Nunc nunc orci, pellentesque sed volutpat in, lobortis venenatis massa.
                        </p>
                    </div>
                </div>
            </div>
           
        </section>
        <Footer/>
        </>
    )
}