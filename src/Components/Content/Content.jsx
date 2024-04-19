import React from 'react';
import Styles from './Content.module.css';

export default function Content(props) {
  const Content = Styles.content;
  const Table = Styles.table;
  const THeaders = Styles.theaders;
  return (
    <div className={Content}>
      <table className={Table}>
        <thead className={THeaders}>
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
