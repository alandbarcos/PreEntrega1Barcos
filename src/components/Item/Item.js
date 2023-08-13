import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Item({item}) {
    return (
        <Link to={"/item/" + item.id} className='text-decoration-none'>
            <div className="container card">
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title><h3>{item.name}</h3></Card.Title>
                        <p>Stock: {item.stock}</p>
                        <p>${item.price}</p>
                        <Button variant="info">Ver detalle</Button>
                </Card.Body>
                </Card>       
            </div>                 
        </Link>

    );
}

export default Item