import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <Input
                value={value}
                onChange={onChange}
                placeholder={t('Введите текст')}
            />
            <Counter />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
