import { Link } from 'react-router-dom';
import DisplayTags from '../../../shared/DisplayTags/DisplayTags';

export default function PostDetails({ post }) {
	// ! Required variables
	const { id, title, image, tags, likes, isSaved, createdAt } = post;

	return (
		<div className='lws-card'>
			<Link to={`/blog/${id}`}>
				<img src={image} className='lws-card-image' alt={title} />
			</Link>
			<div className='p-4'>
				<div className='lws-card-header'>
					<p className='lws-publishedDate'>{createdAt}</p>
					<p className='lws-likeCount'>
						<i className='fa-regular fa-thumbs-up'></i> {likes}
					</p>
				</div>
				<Link to={`/blog/${id}`} className='lws-postTitle'>
					{title}
				</Link>
				<DisplayTags tags={tags} />
				{/* <!-- Show this element if post is saved --> */}
				{isSaved && (
					<div className='flex gap-2 mt-4'>
						<span className='lws-badge'>Saved</span>
					</div>
				)}
			</div>
		</div>
	);
}
