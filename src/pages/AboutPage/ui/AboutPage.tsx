import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { theme } = useTheme();
    const { t } = useTranslation('about');

    return (
        <div className={classNames('AboutPage', {}, [theme])}>
            {t('О сайте')}
            <Counter />
        </div>
    );
};

export default AboutPage;
