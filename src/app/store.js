import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../features/blogs/blogsSlice';

const store = configureStore({
	reducer: {
		blogs: blogsSlice,
	},
});

export default store;
