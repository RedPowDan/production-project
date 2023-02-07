import { classNames }      from 'shared/lib/classNames/classNames';
import cls                 from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher }   from 'widgest/ThemeSwithcer';
import { Toggle }          from 'widgest/Sidebar/ui/Toggle/Toggle';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={classNames(cls.Sidebar,
                {[cls.collapsed]: collapsed},
                [className])}
        >
            <Toggle callback={setCollapsed} isHidden={collapsed}/>

            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
