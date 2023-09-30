import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlogs from './blogsAPI';

// initial state
const initialState = {
	posts: [],
	isLoading: false,
	isError: false,
	error: '',
};

// fetch api thunk
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
	const blogs = await getBlogs();

	return blogs;
});

// create blogs slice
const blogsSlice = createSlice({
	name: 'blogs',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchBlogs.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchBlogs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			})
			.addCase(fetchBlogs.rejected, (state, action) => {
				state.isLoading = false;
				state.posts = [];
				state.isError = true;
				state.error = action.error.message;
			});
	},
});

export default blogsSlice.reducer;
