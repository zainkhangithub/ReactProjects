import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { DLT } from '../redux/actions/action';

const Header = () => {

    const [price, setPrice] = useState(0)

    const getData = useSelector((state) => state.cartreducer.carts)

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0
        getData.map((d, key) => {
            price = d.price * d.qnty + price
        })
        setPrice(price)
    }

    useEffect(() => {
        total()
    }, [total])

    return (
        <>
            <Navbar style={{ height: "60px", background: "rgba(0, 30, 60, 1)" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "Pointer" }}></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getData.length ?
                            <div className="card_details" style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData.map((d, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>
                                                            <NavLink to={`/cart/${d.id}`} onClick={handleClose}>
                                                                <img src={d.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                            </NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{d.rname}</p>
                                                            <p>Price: ${d.price}</p>
                                                            <p>Quantity: {d.qnty}</p>
                                                            <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(d.id)}>
                                                                <i className="fas fa-trash smalltrash"></i>
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(d.id)}>
                                                                <i className="fas fa-trash largetrash"></i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3}><p className="text-center" style={{paddingTop: 20, fontWeight: "700", fontSize: 22}}>Total: ${price}</p></td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", position: "relative", padding: 10 }}>
                                <i className="fas fa-close smallclose"
                                    onClick={handleClose}
                                    style={{ fontSize: 20, position: "absolute", top: 23, right: 20, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your cart is empty</p>
                                <img src="./cart.gif" className='emptycart_img' style={{ width: "5rem", padding: 10 }} alt="" />
                            </div>
                    }
                </Menu>
            </Navbar>
        </>
    )
}

export default Header