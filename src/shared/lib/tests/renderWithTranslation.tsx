import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18nTForTest from '../../config/i18n/i18nTForTest';

export function renderWithTranslation(compotent: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nTForTest}>
            {compotent}
        </I18nextProvider>,
    );
}
