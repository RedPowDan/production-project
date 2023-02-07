import { classNames }          from 'shared/lib/classNames/classNames';
import cls                     from './Toggle.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import React, { useState }     from 'react';
import ArrowRight              from 'shared/assets/icons/arrow-right.svg';
import ArrowLeft              from 'shared/assets/icons/arrow-left.svg';


interface ToggleProps {
    className?: string;
    callback: React.Dispatch<React.SetStateAction<boolean>>;
    isHidden: boolean;
}

export const Toggle = ({className, callback, isHidden}: ToggleProps) => {

    const onToggle = () => {
        callback(prev => !prev);
    }

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
