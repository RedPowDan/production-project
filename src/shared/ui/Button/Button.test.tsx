import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Проверка рендера кнопки', () => {
    test('Проверка рендера', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Проверка для класса clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
