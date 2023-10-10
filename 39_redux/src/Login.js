import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from './store/login';
​
export default function Login() {
    const login = useSelector((state) => state.login.isLogin);
    console.log(login);
    const dispatch = useDispatch();
​
    const loginFunc = () => {
        dispatch(loginAction.login());
    };
    const logoutFunc = () => {
        dispatch(loginAction.logout());
    };
​
    return (
        <>
            {login ? (
                <>
                    <div>로그인하셨습니다</div>
                    <button onClick={logoutFunc}>로그아웃</button>
                </>
            ) : (
                <>
                    <div>로그아웃중...</div>
                    <button onClick={loginFunc}>로그인</button>
                </>
            )}
        </>
    );
}