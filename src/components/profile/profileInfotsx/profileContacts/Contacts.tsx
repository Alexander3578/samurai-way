import React from 'react';
import s from './Contacts.module.css'

type ContactsProps = {
    contactTitle: string
    contactValue: string | null
}

export const Contact:React.FC<ContactsProps> = ({contactValue, contactTitle}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    );
};

