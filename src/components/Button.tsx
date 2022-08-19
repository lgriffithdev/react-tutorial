import { FC } from 'react';

type Props = {
    color: string,
}

const Button: FC<Props & JSX.IntrinsicElements['button']> = ({ children, color, ...props }) => {
    return (
        <button {...props}>{children}</button>
    );
};

export default Button;
