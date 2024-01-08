import styles from "@/styles/components/box.module.css";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["300", "100"] });

type BoxType = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  noPadding?: boolean;
};

const Box = ({ children, className, noPadding }: BoxType): JSX.Element => {
  return (
    <div
      className={`${noPadding ? styles.boxNoPadding : styles.box} ${
        lato.className
      } ${className}`}>
      {children}
    </div>
  );
};

export default Box;
