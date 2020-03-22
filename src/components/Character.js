import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

class Character extends Component{
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired,
  }

  render(){
    const { image, name, status, species, gender, origin, lastLocation } = this.props;
    return (
      <div className={styles.card}>
        <section className={styles.image}>
          <img src={image} />
          <p className={styles.p}>{name}</p>
        </section>

        <section className={styles.about}>
          <ul className={styles.left}>
            <li>status</li>
            <li>species</li>
            <li>gender</li>
            <li>origin</li>
            <li>status</li>
            <li>last location</li>
          </ul>

          <ul className={styles.right}>
            <li>{status}</li>
            <li>{species}</li>
            <li>{gender}</li>
            <li>{origin}</li>
            <li>{status}</li>
            <li>{lastLocation}</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Character;
