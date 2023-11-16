import React from 'react'

const Book = ({ img, title, author, children }) => {
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			{children} 
			{/* Using children to access everything we render between component types */}
		</article>
	)
}

export default Book
