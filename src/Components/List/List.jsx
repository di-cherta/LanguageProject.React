import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Styles from './List.module.css'
import { useState } from 'react';
import image1 from '../assets/edit-button.png';
import image2 from '../assets/delete-button.png';
import image5 from '../assets/check-button.png';
import image6 from '../assets/cancel-button.png';


export default function List() {
  const List = (Styles.list);
  const Wrapper = (Styles.wrapper);
  const animals = [
    {id: 1, word: 'cat', transcription: '[kæt]',translation: 'кошка', finished: false },
    {id: 2, word: 'dog', transcription: '[dɒɡ]',translation: 'собака', finished: false },
    {id: 3, word: 'hamster', transcription: '[ˈhæm.stər]',translation: 'хомяк', finished: false },
    {id: 4, word: 'snake', transcription: '[sneɪk]',translation: 'змея', finished: false },
  ];
  const [list, setList] = useState(animals);
  const [updatedItem, setUpdatedItem] = useState(null);
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
          {list.map((item, index)=> (
            <ListItem
            key={item.id}
            item={item}
            index={index}
            setList={setList}
            updatedItem={updatedItem}
            setUpdatedItem={setUpdatedItem}
          />
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}
const ListItem = ({
  item: { id, word, transcription, translation},
  setList,
  updatedItem,
  setUpdatedItem,
}) => {
  const Image = (Styles.image);
  const Button = (Styles.button);

  const isCurrentBeingUpdated = updatedItem === id;

  const handleInputChange = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, word: value} : item
      )
    );
  };
  const handleTranscriptionChange = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, transcription: value} : item
      )
    );
  };
  const handleTranslationChange = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, translation: value} : item
      )
    );
  };

  const renderWordOrInput = () => {
    return isCurrentBeingUpdated ? (
      <input value={word} onChange={handleInputChange} />
    ) : (
      word
    );
  };
  const renderTranscriptionOrInput = () => {
    return isCurrentBeingUpdated ? (
      <input value={transcription} onChange={handleTranscriptionChange} />
    ) : (
      transcription
    );
  };
  const renderTranslationOrInput = () => {
    return isCurrentBeingUpdated ? (
      <input value={translation} onChange={handleTranslationChange} />
    ) : (
      translation
    );
  };

  return (
    <tr>
      <td>{renderWordOrInput()}</td>
      <td>{renderTranscriptionOrInput()}</td>
      <td>{renderTranslationOrInput()}</td>
      <td style={{width: '120px'}}><button onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)} className={Button}>
        {isCurrentBeingUpdated ? <img src={image5} alt="check" className={Image}/> : <img src={image1} alt="edit" className={Image}/>}
      </button>
      <button className={Button}><img src={image6} alt="check" className={Image}/></button>
      </td>
      </tr>
  );
};

