import React from 'react'
import axios from 'axios'
let list;
console.log("aaaaaa")
class Produits extends React.Component {
    constructor() {
        super();
        this.state = {
            array : []
        }
        console.log(this.state.array)
    }
    componentDidMount = () => {
        const url ='https://fakestoreapi.com/products/';
        console.log("aaaaaa")
        axios(url).then(result => {
            //  console.log(result.data)
             list = result.data
            this.setState({
            array: list
               
            })
        })
    }
    render() { 
        return (
            <>
            <h1>Produits</h1>
            <ul>
             {
             this.state.array.map(product=>{
                 return <div> 
                     <p>{product.title}</p>
                     <p>{product.price} €</p>
                     <img src={product.image} width="200px" />
                 </div>
               }

             )}
             </ul>
            </>
        )
    }
}
export default Produits