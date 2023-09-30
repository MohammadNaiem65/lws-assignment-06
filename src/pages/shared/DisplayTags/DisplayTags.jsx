export default function DisplayTags({ tags }) {
	return (
		<div className='lws-tags'>
			{tags?.map((str, index) => (
				<span key={index}>
					#{str}
					{index !== tags.length - 1 ? ',' : ''}
				</span>
			))}
		</div>
	);
}
