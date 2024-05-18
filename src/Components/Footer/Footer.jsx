import Styles from './Footer.module.css'

export default function Footer (){
    return(
        <footer className={Styles.footer}>
            <button className={Styles.random}>Random</button>
        </footer>
    )
}