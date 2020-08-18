import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mybutton.module.scss';

const Mybutton = (props) => {
  function onclick(evt) {
    evt.stopPropagation();
    const elementDeclencheur = evt.currentTarget;
    console.log(evt, elementDeclencheur);
    elementDeclencheur.classList.add(styles.Mybutton_click);
    setTimeout(e => {
      e.classList.remove(styles.Mybutton_click);
    }, 350, elementDeclencheur);
    props.buttononclick();
  }
  return (
    <div className={styles.Mybutton} data-testid="Mybutton2" onClick={onclick} style={{ borderColor: props.color, ...props.style }}>
      <div className={styles.container} style={{ backgroundColor: props.color }}>
        {props.children}
      </div>
    </div>
  );
}
Mybutton.propTypes = {
  color: PropTypes.string.isRequired,
  buttononclick:PropTypes.func.isRequired
};

Mybutton.defaultProps = { color: 'tomato',buttononclick:e=>console.log('buttonclicked',e) };

export default Mybutton;
