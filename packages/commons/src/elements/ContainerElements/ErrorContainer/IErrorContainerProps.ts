import {
  FieldProps
} from 'formik';

export interface IErrorContainerProps extends FieldProps {
  /** Custom Component Content */
  children: React.ReactNode;
  elementClass: string;
}
