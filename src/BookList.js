import React from 'react'
import Book from './Book'
import { books } from './data'
import EventExamples from './EventExamples'

// map - creates a new array from calling a function for every array element.

const BookList = () => {
	return (
		<>
			<div>
				<h2 className='heading'>BookList</h2>
			</div>
			<section className='booklist'>
				<EventExamples />
				{books.map((book) => {
					return <Book {...book} key={book.id} />
				})}
			</section>
		</>
	)
}

export default BookList
