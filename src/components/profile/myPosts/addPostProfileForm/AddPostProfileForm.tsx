import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../../utils/validators/validators';
import {FormControl} from '../../../comman/formControls/FormControls';

export type PostProfileFormType = {
    postText: string
}

const maxLength30 = maxLengthCreator(30);

const PostProfileForm:React.FC<InjectedFormProps<PostProfileFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl}
                   tagName='textarea'
                   name='postText'
                   placeholder='Write new post...'
                   validate={[requiredField, maxLength30]}></Field>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

export const AddPostProfileForm = reduxForm<PostProfileFormType>({
    form: 'addPostProfileForm'
})(PostProfileForm);