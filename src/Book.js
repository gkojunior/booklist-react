import React from 'react'

const Book = (props) => {
	const { img, title, author, displayValue } = props
	// console.log(props);

	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<button onClick={displayValue}>display title</button>
			<h4>{author}</h4>
		</article>
	)
}

export default Book
