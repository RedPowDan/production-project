import { useContext } from 'react';
import { LOCAL_STORAGE_SIDEBAR_KEY, SidebarContext } from '../lib/SidebarContext';

interface UseSidebarResult {
    collapsed: boolean;
    changeCollapsed: () => void;
}

export function useSidebar(): UseSidebarResult {
    const { collapsed, setCollapsed } = useContext(SidebarContext);

    const changeCollapsed = () => {
        const newCollapsed = !collapsed;
        setCollapsed(newCollapsed);

        localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, String(newCollapsed));
    };

    return {
        collapsed,
        changeCollapsed,
    };
}
