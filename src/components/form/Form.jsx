import React, { Component } from 'react';
import styles from './Form.module.scss';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
      error: '',
      isFocused: false,
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true, error: '' });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleChange = e => {
    this.setState({ value: e.target.value, error: '' });
  };

  render() {
    const { label, placeholder, name, className } = this.props;
    const { value, error, isFocused } = this.state;

    return (
      <div className={`${styles.inputField} ${className || ''}`}>
        <label className={styles.label}>{label}</label>
        <input
          type="text"
          name={name}
          className={`${styles.input} ${isFocused ? styles.inputFocused : ''}`}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={value}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
}

export default FormInput;
