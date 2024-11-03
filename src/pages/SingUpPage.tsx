import React, { FC } from 'react'
import Form from '../features/Form/components/Form'

type Props = {}

const SingUpPage: FC<Props> = () => {
    return (
        <div>
            <Form isForLogInPage={false} />
        </div>
    )
}

export default SingUpPage