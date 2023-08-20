import React from 'react'

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg' alt='Iron Flame'/>
const Title = () => <h2>Iron Flame</h2>
const Author = () => {
    return <h4>Rebecca Yarros</h4>
}

const Book = () => {
  return (
    <article>
          <Image />
          <Title />
          <Author />
    </article>
  )
}

export default Book
