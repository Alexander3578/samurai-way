import {PhotosType, UsersType} from 'redux/users-reducer';

export type UsersChangeType = {
    id?: number
    photos?: PhotosType
    followed?: boolean
    name?: string
    status?: string | null
    uniqueUrlName?: string | null
}

export const updateObjInArray = (items: UsersType[], itemId: number, newObjProps: UsersChangeType) => {
    return items.map((user) => user.id === itemId ? {
        ...user,
        ...newObjProps
    } : user)
}