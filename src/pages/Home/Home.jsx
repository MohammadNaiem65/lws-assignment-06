import FilterSection from './FilterSection/FilterSection';
import PostContainer from './PostsContainer/PostContainer';

export default function Home() {
	return (
		<section className='wrapper'>
			<FilterSection />

			{/* <!-- posts container  --> */}
			<PostContainer />
			{/* <!-- posts container ends --> */}
		</section>
	);
}
