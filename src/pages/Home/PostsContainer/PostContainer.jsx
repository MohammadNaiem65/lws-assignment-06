import { useEffect } from 'react';
import PostDetails from './PostDetails/PostDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../features/blogs/blogsSlice';
import Loading from '../../shared/Loading/Loading';
import NothingFound from '../../shared/NothingFound/NothingFound';
import Error from '../../shared/Error/Error';

export default function PostContainer() {
	// ! Required hooks
	const { posts, isLoading, isError, error } = useSelector(
		(state) => state.blogs
	);
	const dispatch = useDispatch();

	// fetch posts
	useEffect(() => {
		dispatch(fetchBlogs());
	}, [dispatch]);

	let content;
	if (isLoading) content = <Loading />;
	if (!isLoading && posts.length === 0) content = <NothingFound />;
	if (!isLoading && isError) content = <Error error={error} />;
	if (!isLoading && posts.length)
		content = posts.map((post) => (
			<PostDetails key={post.id} post={post} />
		));

	return (
		<main className='post-container' id='lws-postContainer'>
			{content}
		</main>
	);
}
