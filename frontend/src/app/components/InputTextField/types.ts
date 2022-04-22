export interface InputTextFieldProps {
  type: string;
  placeholder: string;
  name?: string;
  id?: string;
  onInputChangeHandler(e: React.FormEvent<HTMLInputElement>): void;
}
