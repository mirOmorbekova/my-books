import { useState } from 'react';
import { data } from './data';
import { dataBook } from './dataBook';
import { childBook } from './childBook';
import book from './book.jpg';
import './App.css';

function App() {

  const [books, setBooks] = useState(data);

  const removeBook = (id) => {
    let newBook = books.filter(book => book.id !== id);
    setBooks(newBook)
  }

  const [letters, setLetters] = useState(0);
  const { id, name, author, image } = dataBook[letters];
  
  const previousLetters = () => {
      setLetters((letters =>{
      letters --;
      if (letters < 0) {
          return dataBook.length - 1;
      }
      return letters;
  }))
  }

  const nextLettrs = () => {
    setLetters((letters =>{
    letters ++;
    if (letters > dataBook.length - 1) {
        letters = 0;
    }
    return letters;
}
  
  ))

  }


  const [child, setchild] = useState(0);
  const { iD, nam, autho, imag} = childBook[child];
  
  const previousChild = () => {
      setchild((child =>{
      child --;
      if (child < 0) {
          return childBook.length - 1;
      }
      return child;
  }))
  }

  const nextChild = () => {
      setchild((child =>{
      child ++;
      if (child > childBook.length - 1) {
          child = 0;
      }
      return child;
  }
  
  ))

  }

  return(
    <div>
      <div className='container'>
        <h1>Список классических литератур {books.length}</h1>
      </div>
      <div className='container'>
      <img src={book}  width='500px' height='300px' alt='book'/>
      </div>

      {books.map((element => {
        const {id, title, author, image} = element;

        return(
          <div  key={id}>
            <div className='container'>
              <h3>{id} - {title}</h3>
            </div>

            <div className='container'>
              <h3>{author}</h3>
            </div>

            <div className='container'>
            <img className='books' src={image} width="300px" alt="book"/>
            </div>

            <div className="container">
              <button className="btn" onClick={() => removeBook(id)}>Удалить</button>
        </div>
          </div>
        )
      }))}
      <div className='container'>
      <button  onClick={() => setBooks([])}>Удалить всё</button>
        </div>

        <div className='container'>
          <h2>Зарубежная психология</h2>
        </div>

        <div className='container'>
    <h1>{id} - "{name}"</h1>    
  </div>

        <div className='container'>
        <img src={image} width="300px" height="480px" alt='book'/>
    </div>

    <div className='container'>
        <h3>{author}</h3>
    </div>

    <div className='container'>
    <button onClick={previousLetters}>Назад</button>
    <button onClick={nextLettrs}>Следуйщий</button>
        </div>

        <div className='container'>
          <h2>Детская литература</h2>
        </div>

        <div className='container'>
    <h1>{iD} - "{nam}"</h1>    
  </div>

        <div className='container'>
        <img src={imag} width="300px" height="480px" alt='book'/>
    </div>

    <div className='container'>
        <h3>{autho}</h3>
    </div>

    <div className='container'>
    <button onClick={previousChild}>Назад</button>
    <button onClick={nextChild}>Следуйщий</button>
        </div>

        </div>
)
    }

export default App;
