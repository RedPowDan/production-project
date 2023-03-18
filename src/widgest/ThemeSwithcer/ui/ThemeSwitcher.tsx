import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={changeTheme}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.LIGHT
                    ? <LightIcon />
                    : <DarkIcon />
            }
        </Button>
    );
});
