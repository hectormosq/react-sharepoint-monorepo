// tslint:disable-next-line:no-submodule-imports
import 'office-ui-fabric-react/dist/sass/Fabric.scss';
import React from 'react';
import { IErrorMessage } from './IErrorMessage';

function ErrorMessage(props: IErrorMessage): JSX.Element {
  // TODO Must Refactor this
  return (
    <div className={'ms-fontColor-error'}>{props.errorMessage}</div>
  );
}

export default ErrorMessage;
