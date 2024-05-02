import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Styles from './List.module.css'
import Table from '../Table/Table';
import Editing from '../Editing/Editing';

export default function List() {
  const List = (Styles.list);
  const Wrapper = (Styles.wrapper);
  const animals = [
    {id: 1, word: 'cat', transcription: '[kæt]',translation: 'кошка'},
    {id: 2, word: 'dog', transcription: '[dɒɡ]',translation: 'собака'},
    {id: 3, word: 'hamster', transcription: '[ˈhæm.stər]',translation: 'хомяк'},
    {id: 4, word: 'snake', transcription: '[sneɪk]',translation: 'змея'},
  ];
    const Changes = false;
  return (
    <div className={Wrapper}>
        <Header/>
        <table class={List}>
        <caption>
          <h2>Animals</h2>
        </caption>
        <thead>
          <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th style={{width: '120px'}}>Editing</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((item)=>{
            return(
              <React.Fragment>
            {Changes ?
            <Editing key={item.id} word={item.word} transcription={item.transcription} translation={item.translation} changes={item.changes}/>
          : <Table key={item.id} word={item.word} transcription={item.transcription} translation={item.translation} changes={item.changes}/>}
          </React.Fragment>
        )})}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}
