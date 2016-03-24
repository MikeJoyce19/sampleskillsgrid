import LoginForm from '../../src/app/components/LoginForm'
import ReactTestUtils from 'react-addons-test-utils'

describe('LoginForm', () => {
    it('exists', () => {
        expect(LoginForm).toBeDefined()
    })


    describe('renders user tiles', () => {
        var users = [
                {username: 'biff1', role: 'lead'},
                {username: 'biff2', role: 'lead'},
                {username: 'biff3', role: 'lead'}
            ],
            component;
        beforeEach(() => {
            var parent = ReactTestUtils.renderIntoDocument(<div>
                <LoginForm users={users} login={() => {}}></LoginForm>
            </div>);

            component = parent.children[0];
        });
        it('for each user inputted', () => {
            expect(component.children.length).toEqual(users.length)
        })
    })

    describe('clicking tile', () => {
        var loggedInUser = {
            username: 'mike',
            role: 'tester'
        },
            loginSpy;
        beforeEach(() => {
            loginSpy = jasmine.createSpy('spy');
            var parent = ReactTestUtils.renderIntoDocument(<div>
                <LoginForm users={[loggedInUser]} login={loginSpy}></LoginForm>
            </div>)

            var component = parent.children[0];

            var tile = component.children[0];
            ReactTestUtils.Simulate.click(tile);
        })
        it('calls login function', () => {
            expect(loginSpy).toHaveBeenCalled();
        })

        it('logs in specific user', () => {
            expect(loginSpy).toHaveBeenCalledWith(loggedInUser);
        })
    })
});
