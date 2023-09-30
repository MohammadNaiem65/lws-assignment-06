import axiosInstance from '../../utils/axios';

const getBlogDetails = async (id) => {
	const res = await axiosInstance.get(`/blogs/${id}`);

	return res.data;
};

export default getBlogDetails;
