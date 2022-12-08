import React, { useState } from 'react';
import {Card, Col, Row, Button, Badge, Stack, Collapse} from 'react-bootstrap';


const Content = () => {
    const [open, setOpen] = useState(false);
    return (
        <>  
        <div className='App'>
        <Stack gap={3}>
        <div><h1>Semua Produk Sayur <Badge bg="success">New</Badge></h1></div>
            <div>
            <Row xs={1} md={4} className="g-4">
     
        <Col>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/18_01_2021_04_10_03_CABE_RAWIT_HIJAU_PETIK.jpg" />
            <Card.Body>
              <Card.Title>Cabai Rawit Hijau</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 12.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                    Cabe rawit hijau petik adalah cabai berwarna hijau dengan bentuk yang kecil dan sudah dipetik. Cabe rawit yang berukuran kecil ini rasanya pedas, sering digunakan untuk masakan atau teman makan gorengan.
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/219-cabe-rawit-hijau-petik-250-gr"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/08_12_2018_03_04_41_CABE_RAWIT_MERAH.jpg" />
            <Card.Body>
              <Card.Title>Cabai Rawit Merah</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 15.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                Cabe rawit merah adalah cabai berwarna oranye ke merah dengan bentuk yang kecil. Cabe rawit yang berukuran kecil ini rasanya pedas dan digunakan di berbagai masakan nusantara.
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/674-cabe-rawit-merah"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/07_01_2022_05_30_59_13_04_2020_03_41_21_cengkeh_2.jpg" />
            <Card.Body>
              <Card.Title>Cengkeh</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 20.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                Cengkeh adalah tanaman yang memiliki daun yang berbentuk seperti daun kemangi. Daun cengkeh memiliki rasa yang pedas dan digunakan sebagai bumbu masakan.
                <br></br>
                <br></br>
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/609-cengkeh-250-gr"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/18_11_2021_01_43_46_bawang_bombay_kupas.jpg" />
            <Card.Body>
              <Card.Title>Bawang Bombay</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 30.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                    Bawang bombay adalah bawang putih yang memiliki bentuk seperti bawang merah. Bawang bombay memiliki rasa yang lebih manis dan sedikit pedas.
                    <br></br>
                    <br></br>
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/539-bawang-bombay-kupas"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/21_07_2022_03_28_55_asam_kandis.jpg" />
            <Card.Body>
              <Card.Title>Asam Kandias</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 10.900</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                Asam kandis adalah asam yang dihasilkan dari fermentasi gula dengan bakteri. Asam kandis ini digunakan sebagai bahan pengawet dan pengencer.               
                <br></br>
                <br></br>
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/219-cabe-rawit-hijau-petik-250-gr"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/21_07_2022_01_51_32_daun_basil.jpg" />
            <Card.Body>
              <Card.Title>Daun Basil</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 18.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                Daun basil adalah daun yang memiliki rasa yang manis dan sedikit pedas. Daun basil digunakan sebagai bumbu masakan.
                <br></br>
                <br></br>
                <br></br>
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/555-daun-basil"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/15_07_2022_04_32_41_ceciwis.jpg" />
            <Card.Body>
              <Card.Title>Ceciwis</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 23.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                    Cabe rawit hijau petik adalah cabai berwarna hijau dengan bentuk yang kecil dan sudah dipetik. Cabe rawit yang berukuran kecil ini rasanya pedas, sering digunakan untuk masakan atau teman makan gorengan.
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/352-ceciwis"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://dn56y54v4g6fs.cloudfront.net/product/13_07_2022_05_09_08_bayam.jpg" />
            <Card.Body>
              <Card.Title>Bayam</Card.Title>
              <Card.Text>
              1kg
              <h5>Rp 12.000</h5>
              <Collapse in={open}>
                <div id="example-collapse-text">
                Bayam adalah sayuran yang memiliki bentuk daun yang panjang dan berwarna hijau. Bayam memiliki rasa yang manis dan sedikit pedas. Bayam digunakan sebagai sayuran atau bumbu masakan.
                </div>
              </Collapse>
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
              <Button onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>
                SELENGKAPNYA
              </Button>
              <Card.Link href="https://carisayur.com/product/439-bayam"><Button variant="success">BELI SEKARANG</Button></Card.Link>
              </Stack>
            </Card.Body>
          </Card>
          
        </Col>
     
    </Row>
    
        </div>
        </Stack>
        </div>
        </>
    );
};

export default Content;