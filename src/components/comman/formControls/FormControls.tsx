import React from 'react';
import {WrappedFieldProps} from 'redux-form';
import S from './FormControls.module.css'

export type FormControlsProps = WrappedFieldProps & {
    tagName: 'textarea' | 'input'
}

export const FormControl: React.FC<FormControlsProps> = ({
                                                          meta,
                                                          input,
                                                          ...props
                                                      }) => {
    const hesError = meta.touched && meta.error
    const Tag = props.tagName

    return (
        <div className={S.formControl + ' ' + (hesError ? S.error : '')}>
            <div>
                <Tag {...props} {...input}/>
            </div>
            {hesError && <span>{meta.error}</span>}
        </div>
    );
};

