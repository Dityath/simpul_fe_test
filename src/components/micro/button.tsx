type buttonType = {
  title: string;
};

const Button = ({ title }: buttonType) => {
  return <button>{title}</button>;
};

export default Button;
