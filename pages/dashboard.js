import React from 'react'
import useTranslation from 'next-translate/useTranslation';

export default function Dashboard(props) {
    const { t } = useTranslation('common');
    return (
        <div>
        <h1>Dashboard</h1>
        <p>
            {t('title')}
        </p>
        </div>
    )
}