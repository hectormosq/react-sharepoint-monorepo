export interface ITextFieldInputProps {
  textFieldInputConfig: {
    required?: boolean;
    readOnly?: boolean;
    errorMessage?: string;
    label?: string;
    maskChar?:string;
    multiline?: boolean;
    rows?: number;
    resizable?: boolean;
    noDefaultValue?: boolean;
  };
}
