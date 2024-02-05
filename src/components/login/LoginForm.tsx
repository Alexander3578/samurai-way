import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../comman/formControls/FormControls';
import {requiredField} from '../../utils/validators/validators';
import {LoginRequestData} from '../../api/api';
import S from './../comman/formControls/FormControls.module.css'

const LoginForm: React.FC<InjectedFormProps<LoginRequestData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> {/*Прроисходит 3 действия: 1- e.preventDefault,
        2- сбор всех данных и комплектация в объект для отправки, в конце вызво onSubmit(obj с данными)*/}
            <div>
                {/*Field это обертка которая в качестве component приниает то, что является ребенком и принимает пропсы. Чьобы не писать
                onChange для input. Это само тотслеживает изменения*/}
                <Field placeholder={'email'}
                       name={'email'}
                       tagName="input"
                       component={FormControl}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       tagName="input"
                       component={FormControl}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            {props.error && <div className={S.formCommonError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<LoginRequestData>({
    form: 'login'
})(LoginForm)
//Оборачивает наш компонент, ХОК который реализует взаимодейстивие с редюсером из редакс-форм.
//В итоге вернется объект для form из globalState со свойством login: где будут уже сво-ва реализация обертки,
// в том числе fields, values и еще: объекты со свойствами названия Field (login, password, rememberMe)
