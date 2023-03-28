import { MouseEventHandler } from "react";

interface GlobalButton {
    className?: string;
    type: 'button' | 'submit';
    buttonText: string | JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type { GlobalButton };