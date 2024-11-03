import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefultMiddlware) => getDefultMiddlware().concat(api.middleware)
})

export default store