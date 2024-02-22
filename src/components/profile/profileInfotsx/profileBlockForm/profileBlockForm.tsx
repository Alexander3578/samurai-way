import React from 'react';
import {ProfileUserType} from 'redux/profile-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from 'components/comman/formControls/FormControls';
import s from '../../profileInfotsx/profileContacts/Contacts.module.css'
import S from 'components/comman/formControls/FormControls.module.css';


type ProfileBlockFormProps = {
    profile: ProfileUserType | null
}

export type ProfileBlockFormData = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    aboutMe?: string
}
const ProfileBlockForm: React.FC<ProfileBlockFormProps & InjectedFormProps<ProfileBlockFormData, ProfileBlockFormProps>> =
    ({profile, handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <b>Full Name: </b>
                    <Field placeholder={'Full name'}
                           name={'fullName'}
                           tagName="input"
                           component={FormControl}
                           validate={[]}/>
                </div>
                <div>
                    <b>Looking for a job: </b>
                    <Field type={'checkbox'} name={'lookingForAJob'} component={'input'}/>
                </div>
                <div>
                    <b>My professional skills: </b>
                    <Field placeholder={'My professional skills'}
                           name={'lookingForAJobDescription'}
                           tagName="textarea"
                           component={FormControl}
                           validate={[]}/>
                </div>
                <div>
                    <b>About me: </b>
                    <Field placeholder={'About me'}
                           name={'aboutMe'}
                           tagName="textarea"
                           component={FormControl}
                           validate={[]}/>
                </div>
                <div>
                    <b>Contacts: </b>{Object.entries(profile?.contacts || {}).map(([key, value]) =>
                    <div key={key} className={s.contact}>
                        <b>{key}:</b> <Field placeholder={`${key}`}
                                             name={`contacts.${key}`}
                                             tagName="input"
                                             component={FormControl}
                                             validate={[]}/>
                    </div>
                    //  <Contact key={key} contactTitle={key} contactValue={value}/>
                )}
                    {error && <div className={S.formCommonError}>{error}</div>}
                </div>
                <div>
                    <button>save</button>
                </div>
            </form>
        );
    };

export const ProfileBlockReduxForm = reduxForm<ProfileBlockFormData, ProfileBlockFormProps>({
    form: 'edit-profile'
})(ProfileBlockForm)


