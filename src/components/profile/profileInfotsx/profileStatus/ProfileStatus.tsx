import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {

    state = {
        editMode: false
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode
                ?
                <div>
                    <span style={{minWidth: '80px', minHeight: '20px',display: 'inline-block'}}
                          onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                </div>
                :
                <div>
                    <input value={this.props.status}
                           onBlur={this.deactivateEditMode}
                           autoFocus/>
                </div>
            }
        </>
    }
}

