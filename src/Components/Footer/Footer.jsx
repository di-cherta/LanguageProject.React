import Styles from './Footer.module.css'

export default function Footer (){
    const Footer = (Styles.footer)
    const Random = (Styles.random)
    return(
        <footer className={Footer}>
            <button className={Random}>Random</button>
        </footer>
    )
}