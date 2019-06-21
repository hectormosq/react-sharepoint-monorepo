// tslint:disable-next-line:no-submodule-imports
import 'office-ui-fabric-react/dist/sass/Fabric.scss';
import React from 'react';
import { ErrorMessage } from '../../FormElements/ErrorMessage';
import styles from './ErrorContainer.module.scss';
import { IErrorContainerProps } from './IErrorContainerProps';

const { getIn } = require('formik');

function ErrorContainer(props: IErrorContainerProps | any) {
  const getError = getIn(props.form.touched, props.field.name) ? getIn(props.form.errors, props.field.name) : '';
  return (
    <div className={getError ? styles[props.elementClass] : ''}>
      {props.children}
      {getError &&  <ErrorMessage errorMessage={getError} />}
    </div>
  );
}

export default ErrorContainer;
