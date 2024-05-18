import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Styles from './HomePage.module.css'

export default function HomePage (){
    return(
        <div className={Styles.wrapper}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}