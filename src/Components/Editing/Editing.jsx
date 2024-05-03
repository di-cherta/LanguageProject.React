import React from "react";
import image5 from '../assets/check-button.png';
import image6 from '../assets/cancel-button.png';
import Styles from './Editing.module.css';

export default function Editing({word, transcription, translation}) {
      const Image = (Styles.image);
      const Button = (Styles.button);
      return(
      <React.Fragment>
        <tr>
        <td><input placeholder={word} /></td>
        <td><input placeholder={transcription} /></td>
        <td><input placeholder={translation} /></td>
        <td style={{width: '120px'}}><button className={Button} id="check"><img src={image5} alt="check" className={Image}/></button><button className={Button} id="cancel"><img src={image6} alt="check" className={Image}/></button></td>
      </tr>
      </React.Fragment>
      )
}
