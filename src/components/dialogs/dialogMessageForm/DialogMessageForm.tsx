import React from 'react';
import {S} from '../Dialogs_Styles';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../../comman/formControls/FormControls';
import {requiredField} from '../../../utils/validators/validators';

export type SendMessageFormValuesType = {
    newMessageText: string
}

const SendMessageForm:React.FC<InjectedFormProps<SendMessageFormValuesType>> = (props) => {
    return (
        <S.SendMessageWrap onSubmit={props.handleSubmit}>
            <S.MessageField component={FormControl}
                            tagName='textarea'
                            name='newMessageText'
                            placeholder={'Enter your message!'}
                            validate={[requiredField]}/>
            <S.SendMessageButton>Send</S.SendMessageButton>
        </S.SendMessageWrap>
    );
};

export const DialogMessageForm = reduxForm<SendMessageFormValuesType>({
    form: 'sendDialogMessageForm'
})(SendMessageForm);