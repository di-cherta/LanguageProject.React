import React from "react";
import image1 from '../assets/edit-button.png';
import image2 from '../assets/delete-button.png';
import Styles from './Table.module.css';

export default function Table({word, transcription, translation}) {
      const Image = (Styles.image);
      const Button = (Styles.button);
      return(
      <React.Fragment>
        <tr>
        <td>{word}</td>
        <td>{transcription}</td>
        <td>{translation}</td>
        <td style={{width: '120px'}}><button className={Button} id="edit"><img src={image1} alt="edit" className={Image}/></button>
        <button className={Button} id="delete"><img src={image2} alt="delete" className={Image}/></button></td>
      </tr>
      </React.Fragment>
      )
}
