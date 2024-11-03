import React from 'react'
import { useGetUsersQuery } from '../usersApi'

type Props = {}

const ShowUsers = (props: Props) => {
    const { data } = useGetUsersQuery()
    return (
        <div>
            {data?.map((item) =>
                <div>
                    <h3>{item.userName}</h3>
                    <h3>{item.password}</h3>
                </div>
            )}
        </div>
    )
}

export default ShowUsers