export interface InputTextFieldProps {
  type: string;
  placeholder: string;
  name: string;
  labelValue: string;
  onInputChangeHandler(e: React.FormEvent<HTMLInputElement>): void;
}
