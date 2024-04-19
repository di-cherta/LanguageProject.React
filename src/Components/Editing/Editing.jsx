import React from "react";
import image5 from '../assets/check-button.png';
import Styles from './Editing.module.css';

export default function Editing(props) {
      const Image = (Styles.image);
      return(
      <React.Fragment>
        <tr>
        <td><input value={props.word} /></td>
        <td><input value={props.transcription} /></td>
        <td><input value={props.translation} /></td>
        <td style={{width: '150px'}}><img src={image5} alt="" className={Image}/></td>
      </tr>
      </React.Fragment>
      )
}
