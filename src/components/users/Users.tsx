import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import avatar from '../../assets/images/23ba420de78f87c008bf699e6eaddc9b.jpg'
import {UsersType} from '../../redux/users-reducer';


export class Users extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((objUsers) => {
                this.props.setUsers(objUsers.data.items)
            })
    }

    render() {
        return <>
            <div>
                {
                this.props.users.map((u: UsersType) =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : avatar}
                                 style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                 alt="users avatar"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            {/*<span>*/}
                            {/*    <div>{u.address.city}</div>*/}
                            {/*    <div>{u.address.country}</div>*/}
                            {/*</span>*/}
                    </span>
                    </div>)
                }
            </div>
        </>
    }
}

