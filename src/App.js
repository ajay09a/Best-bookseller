import React from 'react'
import './index.css'

const books = [
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/12/Everything-Is-Fucked-A-Book-About-Hope-Mark-Manson-Buy-Online-Bookbins-1.png",
    Title: "Everything is Fucked",
    Author: "Mark Manson",
    id: 1
  },
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/01/Ugly-Love-Colleen-Hoover-Buy-Online-Bookbins-1-600x643.png",
    Title: "Ugly Love",
    Author: "Colleen Hoover",
    id: 2
  },
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/12/Twisted-Lies-Ana-Huang-Buy-Online-Bookbins-1.png",
    Title: "Twisted Lies",
    Author: "Ana Huang",
    id: 3
  },
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/01/The-Midnight-Libary-Matt-Haig-Buy-Online-Bookbins-1.png",
    Title: "The Midnight Library",
    Author: "Matt Haig",
    id: 4
  }
]

const App = () => {
  const getbook = (id)=>{
    const book = books.find((book)=> book.id === id)
    console.log(book);
  }
  return (
    <section className='booklist'>
      {books.map((book, index)=>{
        // const {Image, Title, Author} = book;
        // return <Book Image={Image} Title={Title} Author={Author} />;
        return <Book {...book} getbook={getbook} number={index} />
      })}
    </section>
  )
}

const Book = (props) => {
const {Image, Title, Author, id, getbook, number} = props;
  return (
    <article className='book'>
      <img src={Image} alt={Title} />
      <h2>{Title }</h2>
      <h4>{Author}</h4>
      <span className='number'>{number+1}</span>
      <button className='clickbtn' onClick={()=>getbook(id)}>Click</button>
    </article>
  )
}


export default App