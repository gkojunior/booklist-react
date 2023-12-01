import React from 'react'
import Book from './Book'

// React data flow -you can only pass props down from the parent to the child component
import { books } from './Books'

const BookList = () => {
	return (
		<>
			<h1 className='title'>amazon best sellers</h1>
			<section className='booklist'>
				{books.map((book, index) => {
					return <Book {...book} key={book.id} number={index} />
				})}
			</section>
		</>
	)
}

export default BookList

// Notes

// Map - creates a new array from calling a function for every array element.

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
