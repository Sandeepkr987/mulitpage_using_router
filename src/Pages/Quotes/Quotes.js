import React,{useEffect, useState} from 'react';
import './Quotes.css'

function Quotes(props) {
  const [ quote, setQuote ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [click, setClick] = useState(false);
    useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let dataQuotes = data.quotes;
      let randomNum = Math.floor(Math.random() * dataQuotes.length);
      let randomQuote = data.quotes[randomNum];
      console.log(randomQuote)
      setQuote(randomQuote.quote); 
      setAuthor(randomQuote.author); 
    })
  }, [click])
 
  const handleClick = () => {
     setClick(prev => !prev)
  }
  return (
    <div className='container'>
      <h1>{quote}</h1>
      <h3>-{author}-</h3>
      <button className='bn54'onClick={handleClick} id="new-quote">
      <span className='bn54span'>New quote</span>
      </button>
    </div>
  );
}

export default Quotes;