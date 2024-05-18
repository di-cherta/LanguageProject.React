import Styles from './ListItem.module.css';
import imageEdit from '../assets/edit-button.png';
import imageDelete from '../assets/delete-button.png';
import imageCheck from '../assets/check-button.png';
import imageCancel from '../assets/cancel-button.png';

const ListItem = ({
  item: { id, word, transcription, translation},
  setList,
  updatedItem,
  setUpdatedItem,
  animals
}) => {

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

  const setCancel = (id) => {
    setList((list) => list.map((item) => (item.id === id ? animals[id - 1] : item)));
  };

  return (
    <tr>
      <td>{renderWordOrInput()}</td>
      <td>{renderTranscriptionOrInput()}</td>
      <td>{renderTranslationOrInput()}</td>
      <td style={{width: '120px'}}>
        <button onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}
        className={Styles.button}>
        {isCurrentBeingUpdated ?(
        <img src={imageCheck} alt="check" className={Styles.image}/>
        ) : (
        <img src={imageEdit} alt="edit" className={Styles.image}/>
        )}
        </button>
        <button className={Styles.button} onClick={() => setUpdatedItem(null)}>{isCurrentBeingUpdated ? (
        <img src={imageCancel} alt="cancel" className={Styles.image} onClick={() => setCancel(id)} />
        ) : (
        <img src={imageDelete} alt="delete" className={Styles.image}/>
        )}</button>
      </td>
    </tr>
  );
};

export default ListItem;