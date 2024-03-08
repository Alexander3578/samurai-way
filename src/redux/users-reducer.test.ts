import {followAC, unfollowAC, usersReducer, UsersStateType} from './users-reducer';

let state: UsersStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                photos: {
                    large: null,
                    small: null
                },
                followed: false,
                name: 'Alex1',
                status: 'status 0',
                uniqueUrlName: 'URL1',
            },
            {
                id: 1,
                photos: {
                    large: null,
                    small: null
                },
                followed: false,
                name: 'Alex2',
                status: 'status 1',
                uniqueUrlName: 'URL2',
            },
            {
                id: 2,
                photos: {
                    large: null,
                    small: null
                },
                followed: true,
                name: 'Alex3',
                status: 'status 2',
                uniqueUrlName: 'URL3',
            },
            {
                id: 3,
                photos: {
                    large: null,
                    small: null
                },
                followed: true,
                name: 'Alex4',
                status: 'status 3',
                uniqueUrlName: 'URL4',
            }
        ],
        totalCount: 0,
        pageSize: 5,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    let resultState = usersReducer(state, followAC(1))

    expect(resultState.users[1].followed).toBeTruthy()
    expect(resultState.users[0].followed).toBeFalsy()
})

test('unfollow success', () => {
    let resultState = usersReducer(state, unfollowAC(3))

    expect(resultState.users[2].followed).toBeTruthy()
    expect(resultState.users[0].followed).toBeFalsy()
    expect(resultState.users[3].followed).toBeFalsy()
})