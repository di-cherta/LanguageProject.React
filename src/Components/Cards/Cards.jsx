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

	const [showTranslation, setShowTranslation] = useState(false);
	const handleCheck = () => {
		setShowTranslation(true);
	}
	let marking = <button className={Cn(Styles.button, Styles.cardbutton)} onClick = {handleCheck}>Check</button>;
	if(showTranslation){
		marking = <p className={Styles.translation}>{animals[0].translation}</p>
	}

	const [nextWord, setNextWord] = useState(1);
	const handleNext = () => {
		setNextWord(animals.id+1)
	}
  return(
    <div className={Styles.wrapper}>
			<Header/>
			<div className={Styles.container}>
				<button className={Cn(Styles.button, Styles.next)}>&#9668;</button>
				<div className={Styles.wordcard}>
					<h1>{animals[0].word}</h1>
					<p>{animals[0].transcription}</p>
					<p>{marking}</p>
				</div>
				<button className={Cn(Styles.button, Styles.next)}>&#9658;</button>
				<p  className={Styles.par} style={{fontSize: '20px'}}>1 / 4</p>
			</div>
			<Footer/>
		</div>
  )
}