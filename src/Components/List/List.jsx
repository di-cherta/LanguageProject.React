import React, { useState }  from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Styles from './List.module.css'
import imageEdit from '../assets/edit-button.png';
import imageDelete from '../assets/delete-button.png';
import imageCheck from '../assets/check-button.png';
import imageCancel from '../assets/cancel-button.png';


export default function List() {
  const table = (Styles.table);
  const wrapper = (Styles.wrapper);

  const animals = [
    {id: 1, word: 'cat', transcription: '[kæt]',translation: 'кошка'},
    {id: 2, word: 'dog', transcription: '[dɒɡ]',translation: 'собака'},
    {id: 3, word: 'hamster', transcription: '[ˈhæm.stər]',translation: 'хомяк'},
    {id: 4, word: 'snake', transcription: '[sneɪk]',translation: 'змея'},
  ];

  const [list, setList] = useState(animals);
  const [updatedItem, setUpdatedItem] = useState(null);

  return (
    <div className={wrapper}>
        <Header/>
        <table className={table}>
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
    const image = (Styles.image);
    const button = (Styles.button);

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
        <td style={{width: '120px'}}>
          <button onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)} className={button}>
          {isCurrentBeingUpdated ? <img src={imageCheck} alt="check" className={image}/> : <img src={imageEdit} alt="edit" className={image}/>}
          </button>
          <button className={button}>{isCurrentBeingUpdated ? <img src={imageCancel} alt="cancel" className={image}  onClick={() => setUpdatedItem(null)}/> : <img src={imageDelete} alt="delete" className={image}/>}</button>
        </td>
      </tr>
    );
  };

