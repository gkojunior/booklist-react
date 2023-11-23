import React from 'react'

const EventExamples = () => {
	const handleFormInput = () => {
		console.log('handle form input');
	}

	const handleButtonClick = () => {
		alert('handle button click');
	}
	return (
		<section>
			<form>
				<h2>Typical Form</h2>
				<input type='text' name='example' onChange={handleFormInput}style={{ margin: '1rem 0' }} />
			</form>
			<button onClick={handleButtonClick}>click me</button>
		</section>
	)
}

export default EventExamples
