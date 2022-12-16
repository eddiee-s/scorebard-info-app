import { FC } from "react";

interface ButtonPropTypes {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
  arialabel: string;
}

const Button: FC<ButtonPropTypes> = ({
  onClick,
  children,
  disabled,
  arialabel,
}) => {
  return (
    <button
      aria-label={arialabel}
      className={`flex m-2 items-center justify-center p-0 cursor-pointer group border-0 rounded-full  ${
        disabled &&
        "disabled:transition-none disabled:bg-slate-50 disabled:cursor-not-allowed disabled:text-gray-200"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`${
          !disabled
            ? "group-hover:text-green-800 "
            : "group-hover:text-gray-200"
        } text-3xl font-bold select-none transition-colors duration-100 ease-linear`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
