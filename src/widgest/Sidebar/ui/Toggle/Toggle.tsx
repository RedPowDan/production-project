import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import React from 'react';
import cls from './Toggle.module.scss';

interface ToggleProps {
    className?: string;
    callback: React.Dispatch<React.SetStateAction<boolean>>;
    isHidden: boolean;
}

export const Toggle = ({ className, callback, isHidden }: ToggleProps) => {
    const onToggle = () => {
        callback((prev) => !prev);
    };

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={onToggle}
            theme={ThemeButton.CLEAR}
        >
            {
                isHidden
                    ? <ArrowRight />
                    : <ArrowLeft />
            }
        </Button>
    );
};
