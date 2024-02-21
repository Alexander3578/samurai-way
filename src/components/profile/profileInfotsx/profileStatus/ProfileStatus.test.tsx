import {ProfileStatus} from 'components/profile/profileInfotsx/profileStatus/ProfileStatus';
import {create} from 'react-test-renderer';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'}
                                                updateProfileStatus={() => {
                                                }}
                                                authId={1}
                                                userId={1}/>)
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance?.state.status).toBe('it-kamasutra.com');
    })

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'}
                                                updateProfileStatus={() => {
                                                }}
                                                authId={1}
                                                userId={1}/>)
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    })

    test('after creation input should  not be displayed', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'}
                                                updateProfileStatus={() => {
                                                }}
                                                authId={1}
                                                userId={1}/>)
        const root = component.root;
        expect(() => {root.findByType('input')}).toThrow();
    })

    test('input should  be displayed in EditMode instead of span', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'}
                                                updateProfileStatus={() => {
                                                }}
                                                authId={1}
                                                userId={1}/>)
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('it-kamasutra.com');
    })
})