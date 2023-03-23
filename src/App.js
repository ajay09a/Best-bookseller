import React from 'react'
import './index.css'
import { books } from './book'
import { SingleBook } from './singleBook'

const App = () => {
  const getbook = (id)=>{
    const book = books.find((book)=> book.id === id)
    console.log(book);
  }
  return (
    <>
    <div class="animated_object">
      <p class="text_not_gradient">Best Selling<span class="gradient_text">Book</span></p>
    </div>
    <section className='booklist'>
      {books.map((book, index)=>{
        // const {Image, Title, Author} = book;
        // return <Book Image={Image} Title={Title} Author={Author} />;
        return <SingleBook {...book} getbook={getbook} number={index} />
      })}
    </section>
    </>
  )
}

export default App