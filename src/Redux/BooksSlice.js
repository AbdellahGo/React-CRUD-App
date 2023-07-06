import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { insertLogs } from "./reportSlice";



export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get('http://localhost:3005/books')
        return res.data
    } catch (err) {
        return rejectWithValue(err.message);
    }
})


export const insertBooks = createAsyncThunk('books/insertBooks', async (bookInfo, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    try {
        bookInfo.userName = getState().author.userName
        const res = await axios.post('http://localhost:3005/books', bookInfo)
        dispatch(insertLogs({name: 'insert Books', states: 'success'}))
        return res.data
    } catch (err) {
        dispatch(insertLogs({name: 'insert Books', states: 'reject'}))
        return rejectWithValue(err.message);
    }
})


export const readBooks = createAsyncThunk('books/readBooks', async (bookId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.get(`http://localhost:3005/books/${bookId}`)
        return res.data
    } catch (err) {
        return rejectWithValue(err.message);
    }
})


export const deleteBooks = createAsyncThunk('books/deleteBooks', async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await axios.delete(`http://localhost:3005/books/${book.id}`)
        return book
    } catch (err) {
        return rejectWithValue(err.message);
    }
})




export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        readbook: {},
        pending: false,
        error: null,
        deletedBook: ''
    },

    extraReducers: {
        [getBooks.pending]: (state) => {
            state.pending = true
            state.error = null
        },
        [getBooks.fulfilled]: (state, action) => {
            state.pending = false
            state.books = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
        },
        // insertBooks
        [insertBooks.pending]: (state) => {
            state.error = null
        },
        [insertBooks.fulfilled]: (state, action) => {
            state.books.push(action.payload)
        },
        [insertBooks.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
        },
        // readBooks
        [readBooks.pending]: (state) => {
            state.error = null
        },
        [readBooks.fulfilled]: (state, action) => {
            state.readbook = action.payload
        },
        [readBooks.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
        },
        // deleteBooks
        [deleteBooks.pending]: (state) => {
            state.error = null
        },
        [deleteBooks.fulfilled]: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload.id)
            state.deleteBooks = action.payload.title
        },
        [deleteBooks.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
        },
    }
})



export default booksSlice.reducer