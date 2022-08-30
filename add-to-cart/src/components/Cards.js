import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from './CardsData';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action'
import './styles.css'

const Cards = () => {
    const dispatch = useDispatch()

    const [cards, setCards] = useState(CardsData)

    const send = (card) => {
        dispatch(ADD(card))
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-3' style={{ fontWeight: 700 }}>Add To Cart Projects</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    cards.map((card, key) => {
                        return (
                            <Card key={key}
                                    style={{ width: '22rem', border: "none", background: "rgba(0, 30, 60, 1)" }}
                                    className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={card.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title style={{ fontWeight: 600 }}>{card.rname}</Card.Title>
                                        <Card.Text style={{ fontWeight: 400 }}>
                                            Price: ${card.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-center">
                                            <Button
                                                onClick={() => send(card)}
                                                variant="primary" className='col-lg-12'>Add to card</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards