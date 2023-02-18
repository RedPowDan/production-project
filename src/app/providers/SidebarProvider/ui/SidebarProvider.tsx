import { booleanConvert } from 'shared/lib/booleanConvert/booleanConvert';
import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_SIDEBAR_KEY, SidebarContext } from '../lib/SidebarContext';

const value = booleanConvert(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY));
const defaultCollapsed = value == null ? true : value;

const SidebarProvider: FC = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed);

    const defaultProps = useMemo(() => ({
        collapsed,
        setCollapsed,
    }), [collapsed]);

    return (
        <SidebarContext.Provider value={defaultProps}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
