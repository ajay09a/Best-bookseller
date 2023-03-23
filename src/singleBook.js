export const SingleBook = (props) => {
    const {Image, Title, Author, id, getbook, number} = props;
      return (
        <article className='book'>
          <img src={Image} alt={Title} />
          <h2>{Title }</h2>
          <h4>{Author}</h4>
          <span className='number'>{`# ${number+1}`}</span>
          <button className='clickbtn' onClick={()=>getbook(id)}>Click</button>
        </article>
      )
    }
    