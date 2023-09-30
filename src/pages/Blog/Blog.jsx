import { Link } from 'react-router-dom';
import DetailedPost from './DetailedPost/DetailedPost';
import RelatedPosts from './RelatedPosts/RelatedPosts';

export default function Blog() {
	return (
		<div className='w-11/12 mx-auto'>
			{/* <!-- Go Home / Go Back --> */}
			<div className='container mt-8'>
				<Link
					to='/'
					className='inline-block text-gray-600 home-btn'
					id='lws-goHome'>
					<i className='mr-2 fa-solid fa-house'></i>Go Home
				</Link>
			</div>

			<section className='post-page-container'>
				{/* <!-- detailed post  --> */}
				<DetailedPost />

				{/* <!-- related posts --> */}
				<RelatedPosts />
			</section>
		</div>
	);
}
