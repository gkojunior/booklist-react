import React from 'react'
import Book from './Book'

// React data flow -you can only pass props down from the parent to the child component
import { books } from './data'

const BookList = () => {
	const someValue = 'Random Value'
	const displayValue = () => {
		console.log(someValue);
	}
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} displayValue={displayValue} />
			})}
		</section>
	)
}

export default BookList


// Notes 

// Map - creates a new array from calling a function for every array element.

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.