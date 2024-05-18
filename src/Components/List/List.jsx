import React, { useState }  from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Styles from './List.module.css';
import ListItem from '../ListItem/ListItem';


export default function List() {

  const animals = [
    {id: 1, word: 'cat', transcription: '[kæt]',translation: 'кошка'},
    {id: 2, word: 'dog', transcription: '[dɒɡ]',translation: 'собака'},
    {id: 3, word: 'hamster', transcription: '[ˈhæm.stər]',translation: 'хомяк'},
    {id: 4, word: 'snake', transcription: '[sneɪk]',translation: 'змея'},
  ];

  const [list, setList] = useState(animals);
  const [updatedItem, setUpdatedItem] = useState(null);

  return (
    <div className={Styles.wrapper}>
        <Header/>
        <table className={Styles.table}>
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
          {list.map((item, index)=> (
            <ListItem
            key={item.id}
            item={item}
            index={index}
            setList={setList}
            updatedItem={updatedItem}
            setUpdatedItem={setUpdatedItem}
            animals={animals}
          />
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}
