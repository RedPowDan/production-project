import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgest/ThemeSwithcer';
import { LangSwitcher } from 'widgest/LangSwitcher';
import { Toggle } from 'widgest/Toggle';
import { useSidebar } from 'app/providers/SidebarProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { collapsed, changeCollapsed } = useSidebar();
    const { t } = useTranslation();

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
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={classNames(cls.mainLink, {}, [])}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                        className={classNames(cls.mainLink, {}, [])}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>
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
};
