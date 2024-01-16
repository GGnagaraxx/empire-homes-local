import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import notifReducer from "./slices/notifSlice";
import globalSearchReducer from "./slices/globalSearchSlice";
// import propertyApi from "./apiSlices/propertyApiSlice";
// import blogApi from "./apiSlices/blogApiSlice";
// import applicationApi from "./apiSlices/applicationApiSlice";


const store = configureStore({
    reducer: {
        modal: modalReducer,
        notif: notifReducer,
        globalSearch: globalSearchReducer,
        // [propertyApi.reducerPath]: propertyApi.reducer,
        // [blogApi.reducerPath]: blogApi.reducer,
        // [applicationApi.reducerPath]: applicationApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware()
    //     .concat(propertyApi.middleware)
    //     .concat(blogApi.middleware)
    //     .concat(applicationApi.middleware)
    // }
})

export default store;