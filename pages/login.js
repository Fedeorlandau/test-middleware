import React from 'react'
import useTranslation from 'next-translate/useTranslation';

export default function Login() {
    const { t } = useTranslation('common');

    return (
        <div>
        <h1>Login</h1>
        <p>
            {t('title')}
        </p>
        </div>
    )
}