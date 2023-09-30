import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogDetails } from '../../../features/blog/blogSlice';
import Loading from '../../shared/Loading/Loading';
import Error from '../../shared/Error/Error';
import NothingFound from '../../shared/NothingFound/NothingFound';
import DisplayTags from '../../shared/DisplayTags/DisplayTags';

export default function DetailedPost() {
	// ! Required hooks and variables
	const { blogId } = useParams();
	const dispatch = useDispatch();
	const { blogDetails, isLoading, isError, error } = useSelector(
		(state) => state.blogDetails
	);

	// fetch blog details
	useEffect(() => {
		dispatch(fetchBlogDetails(blogId));
	}, [dispatch, blogId]);

	const { id, title, description, image, tags, likes, isSaved, createdAt } =
		blogDetails || {};

	// ! decide the content of the page
	let content;
	if (isLoading) content = <Loading />;
	if (!isLoading && isError) content = <Error error={error} />;
	if (!isLoading && !blogDetails?.title) content = <NothingFound />;
	if (!isLoading && blogDetails?.title) {
		content = (
			<main className='post'>
				<img
					src={image}
					alt={title}
					className='w-full rounded-md'
					id='lws-megaThumb'
				/>
				<div>
					<h1
						className='mt-6 text-2xl post-title'
						id='lws-singleTitle'>
						{title}
					</h1>

					<DisplayTags tags={tags} />

					<div className='btn-group'>
						{/* <!-- handle like on button click --> */}
						<button className='like-btn' id='lws-singleLinks'>
							<i className='fa-regular fa-thumbs-up'></i> {likes}
						</button>
						{/* <!-- handle save on button click --> */}
						{/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
						<button
							className={`save-btn ${isSaved && 'active'}`}
							id='lws-singleSavedBtn'>
							<i className='fa-regular fa-bookmark'></i>{' '}
							{isSaved ? 'Saved' : 'Save'}
						</button>
						<span>{createdAt}</span>
					</div>
					<div className='mt-6'>
						<p>{description}</p>
					</div>
				</div>
			</main>
		);
	}

	return content;
}
