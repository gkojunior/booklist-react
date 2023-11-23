import React from 'react'

const EventExamples = () => {
	const handleFormInput = (e) => {
		console.log(e.target.value)
		console.log('handle form input')
	}

	const handleFormSubmission = (e) => {
		e.preventDefault()
		console.log('Form Submitted')
	}
	return (
		<section>
			<form >
				<h2>Typical Form</h2>
				<input
					type='text'
					name='example'
					onChange={handleFormInput}
					style={{ margin: '1rem 0' }}
				/>
				<button type='submit' onClick={handleFormSubmission}>submit</button>
			</form>
		</section>
	)
}

export default EventExamples
