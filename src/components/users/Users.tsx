import React, {useEffect} from 'react';
import {UsersPropsType} from './UsersContainer';
import {v1} from 'uuid';


export const Users: React.FC<UsersPropsType> = ({users, setUsers, unfollow, follow}: UsersPropsType) => {

    useEffect(() => {
        setUsers([
            {
                id: v1(),
                photo: 'https://i.pinimg.com/originals/23/ba/42/23ba420de78f87c008bf699e6eaddc9b.jpg',
                followed: true,
                fullName: 'Alex',
                status: 'Angel',
                address: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(), photo: 'https://i.pinimg.com/originals/23/ba/42/23ba420de78f87c008bf699e6eaddc9b.jpg',
                followed: false,
                fullName: 'Max',
                status: 'Boss',
                address: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photo: 'https://i.pinimg.com/originals/23/ba/42/23ba420de78f87c008bf699e6eaddc9b.jpg',
                followed: true,
                fullName: 'Gleb',
                status: 'Business',
                address: {city: 'Los-Angeles', country: 'USA'}
            },
            {
                id: v1(),
                photo: 'https://i.pinimg.com/originals/23/ba/42/23ba420de78f87c008bf699e6eaddc9b.jpg',
                followed: false,
                fullName: 'Nasty',
                status: 'Fuck', address: {city: 'Madrid', country: 'Spain'}
            }
        ])
    }, [])

    let usersList = users.map(u =>
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.photo} style={{width: '40px', height: '40px', borderRadius: '50%'}}
                         alt='users avatar'/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => follow(u.id)}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.address.city}</div>
                    <div>{u.address.country}</div>
                </span>
            </span>
        </div>)

    return (
        <div>
            {usersList}
        </div>
    );
};

