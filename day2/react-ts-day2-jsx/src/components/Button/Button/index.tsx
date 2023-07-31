import styles from './Button.module.css';
interface ButtonProps {
  label: string;
  color?: string;
}
function Button(props: ButtonProps) {
  const setColor = `${styles.button} ${(props.color === 'dark') ? styles.button_white : ''}`;
  return (
    <button className={setColor} type='button'>{props.label}</button>
  )
}
export default Button;