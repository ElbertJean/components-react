import { IconType } from 'react-icons';
import { BsAirplaneEnginesFill, BsArrowClockwise } from "react-icons/bs";
import styles from "./Button.module.css";

type IconMap = {
  [key: string]: IconType;
}

const Icons: IconMap = {
  airplane: BsAirplaneEnginesFill,
  loading: BsArrowClockwise
}

type ButtonVariants = "filled-primary" | "outline-primary" | "empty-primary";

type ButtonProps = {
  label: string;
  styleIcon?: string
  variant?: ButtonVariants,
  icon?: keyof IconMap
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const Button :React.FC<ButtonProps> = (props: ButtonProps) => {
  
  const { styleIcon, label, variant = "primary", icon } = props;

  const Icon = icon ? Icons[icon] : undefined;

  return(
    <>
      <button className={`${styles.button} ${styles[variant]}`}>
        {label}
        {Icon ? <Icon className={`${styles.icon} ${styleIcon}`} /> : <></>}
      </button>
    </>
  )
}

export default Button;