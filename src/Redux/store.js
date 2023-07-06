import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./BooksSlice";
import AuthorSlice from "./AuthorSlice";
import reportSlice from "./reportSlice";

const store = configureStore({
    reducer: {
        books: BooksSlice,
        author: AuthorSlice,
        report: reportSlice
    }
})


export default store