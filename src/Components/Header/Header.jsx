import Styles from './Header.module.css'

export default function Header (){
    const Header = (Styles.header);
    return(
        <header className={Header}>
            <p>Английский - просто!</p>
        </header>
    )
}