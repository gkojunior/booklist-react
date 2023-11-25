import React from 'react'

const EventExamples = () => {
	return (
		<section>
			<form >
				<h2>Typical Form</h2>
				<input
					type='text'
					name='example'
					onChange={(e)=>console.log(e.target.value)}
					style={{ margin: '1rem 0' }}
				/>
				<button type='submit'>submit</button>
				<button type='button' onClick={()=>console.log('click me')}>click me</button>

			</form>
		</section>
	)
}

export default EventExamples
