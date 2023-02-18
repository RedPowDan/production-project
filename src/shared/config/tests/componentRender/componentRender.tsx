import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTForTest from 'shared/config/i18n/i18nTForTest';
import { MemoryRouter } from 'react-router-dom';
import { SidebarProvider } from 'app/providers/SidebarProvider';

export interface componentRenderOptions{
    route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTForTest}>
                <SidebarProvider>
                    {component}
                </SidebarProvider>
            </I18nextProvider>
        </MemoryRouter>,
    );
}
