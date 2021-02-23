import logo from './logo.svg';
import './App.css';

function App() {
  const hero = ["Rubel Nayok", "Shakib Khan", "Elias Kanchon", "Shahrukh Khan"];
  const heroine = ["Moushumi", "Apu Biswas", "Diti", "Kajol"];
  const products =[
    {name: "PhotoShop", price: 90.99},
    {name: "Illustrator", price: 40.99},
    {name: "PDF Reader", price: 10.99},
    {name: "Camtasia Studio", price: 40.99}

  ]
  return (
    <div className="App">
      <header className="App-header">
    <p>I am a React person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>

        <Person name={hero[0]} actress={heroine[0]}></Person>
        <Person name={hero[1]} actress={heroine[0]}></Person>
        <Person name={hero[2]} actress={heroine[0]}></Person>
        <Person name={hero[3]} actress={heroine[0]}></Person>

      </header>
    </div>
  );
}

function Product(props) {
  const style = {
    backgroundColor: 'lightgrey',
    width: '300px',
    textAlign: 'center',
    float: 'left',
    borderRadius:'12px',
    color: 'black',
    padding: '10px',
    margin:'10px'
  }
  const {name, price} = props.product;

  console.log(name, price);

  return (
    <div style={style}>
      <h2>Name: {name} </h2>
      <h1>${price} </h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const style = {
    border: '3px solid cyan',
    margin: '10px',
    borderRadius: '10px',
    width: '500px'
  }
  return (
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <h2>Hero of {props.actress}</h2>
    </div>
  )

}

export default App;
