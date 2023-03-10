import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import React from 'react';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';

import cls from './Toggle.module.scss';

interface ToggleProps {
    className?: string;
    callback: React.Dispatch<React.SetStateAction<boolean>>;
    isHidden: boolean;
}

export const Toggle = (props: ToggleProps) => {
    const {
        className,
        callback,
        isHidden,
        ...otherProps
    } = props;

    const onToggle = () => {
        callback((prev) => !prev);
    };

    return (
        <Button
            className={classNames(cls.Toggle, {}, [className])}
            onClick={onToggle}
            theme={ThemeButton.CLEAR}
            {...otherProps}
        >
            {
                isHidden
                    ? <ArrowRight />
                    : <ArrowLeft />
            }
        </Button>
    );
};
