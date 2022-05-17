import React from 'react'
import ReactDOM from 'react-dom';

// Nested Components, React Tools

function BookList(){
    return (
        <section> 
            <Book/> 
            <Book/> 
            <Book/> 
            <Book/> 
            <Book/> 
        </section>
    );
}

const Book = () =>{
    return <article>
        <Image></Image>
        <Title></Title>
        <Author></Author>
    </article>
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL127_SR127,127_.jpg" alt=""/>
const Title = () => <h1>Verity</h1>
const Author = () => <h4>Colleen Hoover</h4>


ReactDOM.render(<BookList/>,document.getElementById('root'));
 