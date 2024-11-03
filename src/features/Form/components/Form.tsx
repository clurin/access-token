import React, { FC, useState } from 'react'
import style from './FormStyle.module.css'
import { useCheckUserMutation } from '../../users/usersApi'


type Props = {
    isForLogInPage: boolean,
}

const Form: FC<Props> = ({ isForLogInPage }) => {

    const [loginValue, setLoginValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    const [checkUser] = useCheckUserMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = checkUser({ userName: loginValue, password: passwordValue, isLogIn: isForLogInPage })
        if ((await result)?.data === false) {
            alert("Error with authorization")
        } else {
            alert("Authorization was successful")
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className={style.container}>
                <input
                    // required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginValue(e.target.value)}
                    value={loginValue}
                    placeholder='login' />
                <input
                    // required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    placeholder='password' />

                <button>{isForLogInPage ? 'ENTER' : 'CHECK IN'}</button>
            </form>
        </div>
    )
}

export default Form