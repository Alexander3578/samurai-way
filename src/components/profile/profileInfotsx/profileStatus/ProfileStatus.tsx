import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
    authId: number | null
    userId: number
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        if (this.props.authId === this.props.userId)
            this.setState({
                editMode: true
            })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<typeof this.state>) {
        if(prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
    }

    render() {
        return <div>
            {!this.state.editMode
                ?
                <div>
                    <span style={{minWidth: '80px', minHeight: '20px', display: 'inline-block'}}
                          onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                </div>
                :
                <div>
                    <input value={this.state.status}
                           onBlur={this.deactivateEditMode}
                           onChange={this.onStatusChangeHandler}
                           autoFocus/>
                </div>
            }
        </div>
    }
}

