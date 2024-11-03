import { api } from "../../app/api"

type ResponseType = {
    userName: string,
    password: string,
    isLogIn: boolean
}
//* <ответ с сервера, отправляемые данные с фронтенда>
export const usersApi = api.enhanceEndpoints({ addTagTypes: ['users'] }).injectEndpoints({
    endpoints: (build) => ({
        checkUser: build.mutation<boolean, ResponseType>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            }),
            invalidatesTags: ['users']
        }),
        getUsers: build.query<Array<Omit<ResponseType, 'isLogIn'>>, void>({
            query: () => '/users',
            providesTags: ['users']
        })
    })
})

export const {
    useCheckUserMutation,
    useGetUsersQuery,
} = usersApi