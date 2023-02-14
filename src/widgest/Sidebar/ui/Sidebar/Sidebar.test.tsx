import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Проверка рендера Sidebar', () => {
    test('Проверка рендера', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Проверка сворачивания ', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(expect(screen.getByTestId('sidebar')).toHaveClass('collapsed'));
    });
});
