export interface ButtonProps {
  isSubmitButton?: boolean;
  isDisabled?: boolean;
  textValue: string;
  onClickAction?: () => void;
  buttonClassName?: string;
}
