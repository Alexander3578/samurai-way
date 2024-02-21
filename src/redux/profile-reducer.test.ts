import {
    addPostAC, deletePostProfileAC,
    profileReducer,
    ProfileType,
    setUserProfileAC
} from 'redux/profile-reducer';

let initialState:ProfileType;

describe('profile-reducer tests', () => {
    beforeEach(()=> {
        initialState = {
            'postData': [
                {id: '1', postName: 'OOOOO', likesCount: 5},
                {id: '2', postName: 'PPPPP', likesCount: 333},
                {id: '3', postName: 'EEEEE', likesCount: 22},
                {id: '4', postName: 'ХХХХХ', likesCount: 3}
            ],
            'profile': null,
            'status': ''
        }
    });

    it('new post should be added', () => {
        const resultState = profileReducer(initialState, addPostAC('Test Name'))

        expect(resultState.postData[0].postName).toBe('Test Name')
        expect(resultState.postData[0].likesCount).toBe(0)
        expect(resultState.postData.length).toBe(5)
    });

    it('correct profile user should be added', () => {
        const resultState = profileReducer(initialState, setUserProfileAC({
            aboutMe: `I'm test`,
            contacts: {
                facebook:  null,
                website:  null,
                vk:  null,
                twitter:  null,
                instagram:  null,
                youtube:  null,
                github: 'git',
                mainLink:  null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: `I'm finding a job`,
            fullName: 'Alexander',
            userId: 29470,
            photos: {
                small: 'big',
                large: 'small',
            }
        }))

        expect(resultState.profile?.fullName).toBe('Alexander')
    });

    it('check length of postData after post deleting', () => {
        const resultState = profileReducer(initialState, deletePostProfileAC('4'))

        expect(resultState.postData[2].postName).toBe('EEEEE')
        expect(resultState.postData.length).toBe(3)
    });
})