import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class TextArea extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    width: PropTypes.number,
    fontSize: PropTypes.number,
    borderRadius: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    width: 500,
    fontSize: 12,
    borderRadius: 8
  };

  render() {
    const { placeholder, width, fontSize, borderRadius, value } = this.props;
    return (
      <TextareaRow
        placeholder={placeholder}
        value={value}
        width={width}
        rows={5}
        fontSize={fontSize}
        borderRadius={borderRadius}
        onChange={this.onChange}
        onKeyDown={this.onEnterPress}
      />
    );
  }
  onChange = event => {
    const onChange = this.props.onChange;
    if (onChange) onChange(event.target.value);
  };

  onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.props.onClick();
    }
  };
}

const TextareaRow = styled.textarea`
  font-family: "Noto Sans", sans-serif;
  padding: 20px;
  resize: none;
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}px`};
  ${props => props.width && `width: ${props.width}px`};
  ${props => props.fontSize && `font-size: ${props.fontSize}px`};
  line-height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:focus {
    outline: none;
    background: #ffffff;
  }
`;
