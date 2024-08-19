import * as React from "react";
import { ReactNode } from "react";
type PropType = {
    children: ReactNode;
    onClick?: () => void;
};
declare const Button: ({ children, onClick }: PropType) => React.JSX.Element;
export default Button;
