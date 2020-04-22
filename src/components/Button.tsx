import React from "react";

type Props = {
    // onClick(): String; method returns string
    // onClick(): void; method returns nothing
    // onClick(text: string): void; method with params
    // onClick: () => void; function returns nothing
    // onClick: (text: string) => void; function with params
    onClick: (text: string) => void
}
const Button = ({ onClick }: Props) => {
  return <button onClick={() => onClick('meg')}>Click me</button>;
};

export default Button;
