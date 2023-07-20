import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Item({item}) {
    return (
        <Link to={"/item/" + item.id} className='text-decoration-none'>
            <div clasName="container card">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title><h3>{item.name}</h3></Card.Title>
                    <Card.Text>
                        <p>Stock: {item.stock}</p>
                        <p>${item.price}</p>
                    </Card.Text>
                </Card.Body>
                </Card>       
            </div>                 
        </Link>

    );
}

export default Item