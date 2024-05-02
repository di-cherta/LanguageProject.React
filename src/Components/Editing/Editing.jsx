import React from "react";
import image5 from '../assets/check-button.png';
import Styles from './Editing.module.css';

export default function Editing({word, transcription, translation}) {
      const Image = (Styles.image);
      const Button = (Styles.button);
      return(
      <React.Fragment>
        <tr>
        <td><input value={word} /></td>
        <td><input value={transcription} /></td>
        <td><input value={translation} /></td>
        <td style={{width: '120px'}}><button className={Button} id="check"><img src={image5} alt="check" className={Image}/></button></td>
      </tr>
      </React.Fragment>
      )
}
