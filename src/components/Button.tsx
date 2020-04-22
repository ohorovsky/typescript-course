import React from "react";

type Props = {
    // onClick: (e: React.MouseEvent) => void // basic mouse event
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // basic mouse event specifically on html button
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void // Basic input event
}
const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
