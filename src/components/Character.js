import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <>
        <article>
          <section id="image">
            <img src={image} />
            <p>{name}</p>
          </section>

          <section id="about">
            <ul className="">
              <li>status</li>
              <li>species</li>
              <li>gender</li>
              <li>origin</li>
              <li>status</li>
              <li>last location</li>
            </ul>

            <ul className="">
              <li>{status}</li>
              <li>{species}</li>
              <li>{gender}</li>
              <li>{origin}</li>
              <li>{status}</li>
              <li>{lastLocation}</li>
            </ul>
          </section>
        </article>
      </>
    );
  }
}

export default Character;
