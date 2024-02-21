import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileHookStatusProps = {
    status: string
    updateProfileStatus: (status: string) => void
    authId: number | null
    userId: number
}

export const ProfileHookStatus: React.FC<ProfileHookStatusProps> = React.memo((props: ProfileHookStatusProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        if (props.authId !== props.userId)
            return
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span style={{minWidth: '80px', minHeight: '20px', display: 'inline-block'}}
                          onDoubleClick={activateEditMode}>
                        {props.status}
                    </span>
                </div>
                :
                <div>
                    <input value={status}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChangeHandler}
                           autoFocus/>
                </div>
            }
        </div>
    );
});

