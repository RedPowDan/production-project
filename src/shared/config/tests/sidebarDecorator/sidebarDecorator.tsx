import { SidebarProvider } from 'app/providers/SidebarProvider';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <SidebarProvider>
            {component}
        </SidebarProvider>,
    );
}
