import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username: loginForm.username, password: loginForm.password }));
    }, [dispatch, loginForm.password, loginForm.username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Авторизация')} />

            {loginForm.error && (
                <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
            )}

            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите логин')}
                autoFocus
                onChange={onChangeUserName}
                value={loginForm.username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={loginForm.password}
            />

            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={loginForm.isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
