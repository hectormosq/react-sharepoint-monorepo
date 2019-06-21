import React from 'react';
import styles from './ComplexText.module.scss';
import { IComplexText } from "./IComplexText";

function ComplexText(props: IComplexText): JSX.Element {
  let render_name = props.complexText;
  let render_subname;
  let render_separator;

  if (props.complexSubText) {
    render_subname = props.complexSubText;
    render_separator = props.complexTextSeparator ? props.complexTextSeparator : '-';
  }

  return (
  <span>
    <span>{render_name}</span> <span>{render_separator}</span> <span className={styles.complexText__subText}>{render_subname}</span>
  </span>
  );
}

export default ComplexText;
