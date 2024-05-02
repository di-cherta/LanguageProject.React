import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Styles from "./Cards.module.css"
import { useState } from "react";
import Cn from 'classnames';

export default function Cards(){
	const animals = [
    {id: 1, word: 'cat', transcription: '[kæt]',translation: 'кошка'},
    {id: 2, word: 'dog', transcription: '[dɒɡ]',translation: 'собака'},
    {id: 3, word: 'hamster', transcription: '[ˈhæm.stər]',translation: 'хомяк'},
    {id: 4, word: 'snake', transcription: '[sneɪk]',translation: 'змея'},
  ];
	const wrapper = (Styles.wrapper);
	const wordCard = (Styles.wordcard);
	const container = (Styles.container);
	const buttonCheck = Cn(Styles.button, Styles.check);
	const buttonNext = Cn(Styles.button, Styles.next);
	const translationWord = (Styles.translation);

	const [showTranslation, setShowTranslation] = useState(false);
	const handleCheck = () => {
		setShowTranslation(true);
	}
	let marking = <button className={buttonCheck} onClick = {handleCheck}>Check</button>;
	if(showTranslation){
		marking = <p className={translationWord}>{animals[0].translation}</p>
	}
  return(
    <div className={wrapper}>
			<Header/>
			<div className={container}>
			<div className={wordCard}>
        <h1>{animals[0].word}</h1>
        <p>{animals[0].transcription}</p>
				<p>{marking}</p>
    </div>
		<button className={buttonNext} onClick = {handleCheck}>Next word</button></div>
			<Footer/>
		</div>
  )
}