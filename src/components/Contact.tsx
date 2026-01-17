import React from 'react';
import '../assets/Contact.scss';
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
    const {t} = useTranslation();
    return (

        <section id="contact" className="contact-section">
            <div className="main-container">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.text')}</p>
                    </div>
        </section>

        );
    };

export default Contact;