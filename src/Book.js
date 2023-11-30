import React from 'react'

const Book = (props) => {
	const { id, img, title, author, getBook } = props
	// console.log(props);

	const getSingleBook = () => {
		getBook(id)
	}

	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<button onClick={getSingleBook}>click me</button>

			{/* Second aproach: */}
			{/* <button onClick={()=> getBook(id)}>click me</button> */}

			<h4>{author}</h4>
		</article>
	)
}

export default Book
