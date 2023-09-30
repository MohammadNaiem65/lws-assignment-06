import FilterSection from './FilterSection/FilterSection';
import Navbar from './Navbar/Navbar';
import PostContainer from './PostsContainer/PostContainer';

export default function Home() {
	return (
		<>
			<Navbar />

			{/* <!-- main --> */}
			<section className='wrapper'>
				<FilterSection />

				{/* <!-- posts container  --> */}
				<PostContainer />
				{/* <!-- posts container ends --> */}
			</section>
		</>
	);
}
