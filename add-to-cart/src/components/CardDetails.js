import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ADD, DLT, REMOVE } from '../redux/actions/action'

const CardDetails = () => {

    const [data, setData] = useState([])
    const { id } = useParams()

    const getData = useSelector((state) => state.cartreducer.carts)

    const dispatch = useDispatch()

    const history = useNavigate()

    const compare = () => {
        let compareData = getData.filter((d) => {
            return d.id == id
        })
        setData(compareData)
    }

    const send = (item) => {
        dispatch(ADD(item))
    }

    const dlt = (id) => {
        dispatch(DLT(id))
        history("/")
    }

    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    useEffect(() => {
        compare()
    }, [id]);


    return (
        <>
            <div className='container mt-5'>
                <h2 className='text-center' style={{ fontWeight: 700 }}>Product Detail Page</h2>
            </div>

            <div className="container mt-5">
                <div className="iteamsdetails">
                    {
                        data.map((d) => {
                            return (
                                <>
                                    <div className="items_img">
                                        <img src={d.imgdata} alt="" />
                                    </div>
                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong> : {d.rname}</p>
                                                    <p><strong>Price</strong> : ${d.price}</p>
                                                    <p><strong>Dishes</strong> : {d.address}</p>
                                                    <p><strong>Total</strong> : ${d.price * d.qnty}</p>
                                                    <div className="mt-5 d-flex justify-content-between align-items-center" style={{ width: 100, background: "#ddd", cursor: "pointer", color: "#111" }}>
                                                        <span style={{ fontSize: 24, userSelect: "none" }} onClick={d.qnty <= 1 ? () => dlt(d.id) : () => remove(d)}>-</span>
                                                        <span style={{ fontSize: 22, userSelect: "none" }}>{d.qnty}</span>
                                                        <span style={{ fontSize: 24, userSelect: "none" }} onClick={() => send(d)}>+</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p><strong>Rating :</strong> <span style={{ background: "rgba(255, 215, 0, 1)", padding: "2px 5px", borderRadius: "5px" }}>{d.rating} ★</span></p>
                                                    <p><strong>Order Review :</strong> <span>{d.somedata}</span></p>
                                                    <p><strong>Remove :</strong> <span onClick={() => dlt(d.id)}> <i className="fas fa-trash" style={{ color: "rgba(235, 0, 20, 1)", cursor: "pointer" }}></i> </span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default CardDetails