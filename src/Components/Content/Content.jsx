import React from 'react';
import Styles from './Content.module.css';

export default function Content(props) {
  return (
    <div className={Styles.content}>
      <table className={Styles.table}>
        <thead className={Styles.theaders}>
          <tr>
            <th scope="col">Topics</th>
            <th scope="col">Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>{props.basic} cards</td>
          </tr>
          <tr>
            <td>Animals</td>
            <td>{props.animals} cards</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>{props.food} cards</td>
          </tr>
          <tr>
            <td>Clothes</td>
            <td>{props.clothes} cards</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
