import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo } from 'react';
import { ThemeSwitcher } from 'widgest/ThemeSwithcer';
import { LangSwitcher } from 'widgest/LangSwitcher';
import { Toggle } from 'widgest/Toggle';
import { useSidebar } from 'app/providers/SidebarProvider';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { collapsed, changeCollapsed } = useSidebar();
    const { t } = useTranslation();

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            collapsed={collapsed}
            item={item}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={cls.toggleContainer}>
                <div className={cls.toggle}>
                    <Toggle
                        data-testid="sidebar-toggle"
                        callback={changeCollapsed}
                        isHidden={collapsed}
                    />
                </div>
            </div>

            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        collapsed={collapsed}
                        item={item}
                        key={item.path}
                    />
                ))}
            </div>

            <div className={cls.switchers}>
                <div className={cls.switcherItem}>
                    <ThemeSwitcher />
                </div>
                <div className={cls.switcherItem}>
                    <LangSwitcher
                        short={!collapsed}
                        className={classNames(cls.lang, {}, [])}
                    />
                </div>
            </div>
        </div>
    );
});
