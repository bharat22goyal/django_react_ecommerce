import React, { Component } from 'react'
import { Button, 
    Icon, 
    Image, 
    Item, 
    Label,
    Segment,
    Loader,
    Dimmer,
    Message } from 'semantic-ui-react'
import {Container,} from "semantic-ui-react";
import axios from 'axios';
import {productListURL} from '../endpoints'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />




export class ProductList extends Component {
    
    state={
        loading:false,
        error:null,
        data:[]
    }
    
    componentDidMount(){
        this.setState({loading:true})
        axios.get(productListURL)
        .then(res=>{
            console.log(res.data)
            this.setState({data:res.data,loading:false})
        }).catch(err=>{
            this.setState({error:err})
        })
    }
    
    render() {
        const {loading,error,data}=this.state
        return (
            <Container>
                {error && 
                (<Message negative>
                    <Message.Header>There was some error</Message.Header>
                    <p>error</p>
                </Message>)}

                {loading && 
                (<Segment>
                    <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                    </Dimmer>

                    <Image src='/images/wireframe/short-paragraph.png' />
                </Segment>)}

                
                
               {data.map(item=>{
                    return <div className="card" key={item.id}>
                    {/* <img src="jeans3.jpg" alt="Denim Jeans" style="width:100%"/> */}
                    <h1>{item.title}</h1>
                    <p className="price"><del>₹{item.price}</del>  ₹{item.discount_price}</p>
                    <p>{item.description}</p>
                    
                    <p><button>Add to Cart</button></p>
                  </div>
                })}
                
            
            </Container>
        )
    }
}

export default ProductList;