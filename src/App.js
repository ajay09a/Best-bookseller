import React from 'react'
import './index.css'

const books = [
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/12/Everything-Is-Fucked-A-Book-About-Hope-Mark-Manson-Buy-Online-Bookbins-1.png",
    Title: "Everything is Fucked",
    Author: "Mark Manson"
  },
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/01/Ugly-Love-Colleen-Hoover-Buy-Online-Bookbins-1-600x643.png",
    Title: "Ugly Love",
    Author: "Colleen Hoover"
  },
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/12/Twisted-Lies-Ana-Huang-Buy-Online-Bookbins-1.png",
    Title: "Twisted Lies",
    Author: "Ana Huang"
  },
  {
    Image: "https://bookbins.in/wp-content/uploads/2022/01/The-Midnight-Libary-Matt-Haig-Buy-Online-Bookbins-1.png",
    Title: "The Midnight Library",
    Author: "Matt Haig"
  }
]

const App = () => {
  return (
    <section className='booklist'>
      {books.map((book)=>{
        const {Image, Title, Author} = book;
        return <Book Image={Image} Title={Title} Author={Author} />;
      })}
    </section>
  )
}

const Book = (props) => {
const {Image, Title, Author} = props;
  return (
    <article className='book'>
      <img src={Image} alt={Title} />
      <h2>{Title }</h2>
      <h4>{Author}</h4>
    </article>
  )
}


export default App