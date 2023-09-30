import axiosInstance from '../../utils/axios';

const getBlogs = async () => {
	const response = await axiosInstance.get('/blogs');

	return response.data;
};

export default getBlogs;
