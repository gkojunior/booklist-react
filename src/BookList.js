import React from 'react'
import Book from './Book'
import { books } from './data'

// map - creates a new array from calling a function for every array element.

const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} />
			})}
		</section>
	)
}

export default BookList
