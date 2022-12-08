import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Form, Offcanvas } from 'react-bootstrap'
import style from './assets/css/Header.module.css';
import logo from './assets/img/Logo-sayurin.png'

const Header = () => {
    const [show, setshow] = useState(false);

    const [item, setItem] = useState({ place: "", another: "another" });

    const { place } = item;
  
    const handleChange = e => {
      e.persist();
      console.log(e.target.value);
  
      setItem(prevState => ({
        ...prevState,
        place: e.target.value
      }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      alert(`${place}`);
    };

    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} className={style["logo"]} alt="logo"></img>
            </Navbar.Brand>
            <Nav className="me-auto">
                
                <Nav.Link className={style["navLinkText"]} href="#home">Home</Nav.Link>
                <Nav.Link className={style["navLinkText"]} href="#contact">Kontak</Nav.Link>
                <Nav.Link className={style["navLinkText"]} href="#about">Tentang Kami</Nav.Link>
                <Nav.Link className={style["navLinkText"]} onClick={() => {setshow(true)}}>Area Pengiriman</Nav.Link>

                <Offcanvas className={style["offcanvasBg"]} show={show} onHide={() => {setshow(false)}} placement='bottom'>
                    <Offcanvas.Header>
                        <Offcanvas.Title>
                            <div className={style["textTitle"]}>Ganti Area Pengiriman</div>
                            <div className={style["textSubTitle"]}>Daftar belanja anda akan hilang jika area pengiriman diganti</div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="place" className="pb-4">
                                <Form.Check
                                    className={style["radio"]}
                                    value="jabodetabek"
                                    type="radio"
                                    aria-label="radio 1"
                                    label="Jabodetabek"
                                    onChange={handleChange}
                                    checked={place === "jabodetabek"}
                                />
                                <Form.Check
                                    className={style["radio"]}
                                    value="jawa tengah"
                                    type="radio"
                                    aria-label="radio 2"
                                    label="Jawa Tengah"
                                    onChange={handleChange}
                                    checked={place === "jawa tengah"}
                                />
                                <Form.Check
                                    className={style["radio"]}
                                    value="jawa barat"
                                    type="radio"
                                    aria-label="radio 3"
                                    label="Jawa Barat"
                                    onChange={handleChange}
                                    checked={place === "jawa barat"}
                                />
                                <Form.Check
                                    className={style["radio"]}
                                    value="jawa timur"
                                    type="radio"
                                    aria-label="radio 4"
                                    label="Jawa Timur"
                                    onChange={handleChange}
                                    checked={place === "jawa timur"}
                                />
                            </Form.Group>
                            <Button className={style["button"]} variant="success" type="submit">Mulai Belanja</Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </Nav>
            
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button className={style["button"]} variant="success">Search</Button>
            </Form>
        </Container>
      </Navbar>
      </>
    );
    
};

export default Header;