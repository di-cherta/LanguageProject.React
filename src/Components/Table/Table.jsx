import React from "react";
import image1 from '../assets/edit-button.png';
import image2 from '../assets/delete-button.png';
import Styles from './Table.module.css';

export default function Table(props) {
      const Image = (Styles.image);
      return(
      <React.Fragment>
        <tr>
        <td>{props.word}</td>
        <td>{props.transcription}</td>
        <td>{props.translation}</td>
        <td style={{width: '150px'}}><img src={image1} alt="" className={Image}/>
        <img src={image2} alt="" className={Image}/></td>
      </tr>
      </React.Fragment>
      )
}
