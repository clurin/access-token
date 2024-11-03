import React, { FC } from 'react'
import Form from '../features/Form/components/Form'

type Props = {}

const LogInPage: FC<Props> = () => {
    return (
        <div>
            <Form isForLogInPage={true}/>
        </div>
    )
}

export default LogInPage;           