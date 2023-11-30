import React from 'react'
import Book from './Book'

// React data flow -you can only pass props down from the parent to the child component
import { books } from './data'

const BookList = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id === id)
		console.log(book)
	}
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} getBook={getBook} />
			})}
		</section>
	)
}

export default BookList

// Notes

// Map - creates a new array from calling a function for every array element.

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
