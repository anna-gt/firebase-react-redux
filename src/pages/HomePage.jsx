import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import {removeUser} from 'store/slices/userSlice'

const HomePage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const {isAuth, email} = useAuth();

	useEffect(() => {
		if (!isAuth)
			navigate('/login')
	},[navigate, isAuth])
	return (
		<div>
			<h1>Welcome</h1>

			<button
					onClick={()=> dispatch(removeUser())}
			>Log out from {email}</button>
        </div>
	)
}

export default HomePage