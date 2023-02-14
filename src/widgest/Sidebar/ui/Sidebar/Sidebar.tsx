import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgest/ThemeSwithcer';
import { Toggle } from 'widgest/Sidebar/ui/Toggle/Toggle';
import { LangSwitcher } from 'widgest/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={cls.toggle}>
                <Toggle
                    data-testid="sidebar-toggle"
                    callback={setCollapsed}
                    isHidden={collapsed}
                />
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
