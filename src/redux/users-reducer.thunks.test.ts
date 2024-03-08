import {followAC, followTC, ResultCode, toggleFollowingInProgressAC, unfollowAC, unfollowTC} from './users-reducer';
import {ResponseType} from '../api/api';
import * as api from '../api/api';

//создает фейковый api(не шлет реальный запрос)
jest.mock('../api/api')
const apiMock = api as jest.Mocked<typeof api>;

const result: ResponseType = {
    data: {},
    resultCode: ResultCode.Success,
    messages: [],
    fieldsErrors: []
}

//заглушка для dispatch
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
})
test('success follow thunk', async () => {

    (apiMock.api.usersApi.follow as jest.Mock).mockResolvedValue(Promise.resolve(result));

    const thunk = followTC(1, true)

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingInProgressAC(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, followAC(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingInProgressAC(false, 1))
})

test('success unfollow thunk', async () => {

    (apiMock.api.usersApi.unfollow as jest.Mock).mockResolvedValue(Promise.resolve(result));

    const thunk = unfollowTC(3, true)

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingInProgressAC(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollowAC(3))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingInProgressAC(false, 3))
})