import { React } from 'react';
import {Card, CardGroup, Button} from 'react-bootstrap';

const Content = () => {
    return (
        <><><Card className="text-center">
            <Card.Body>
                <Card.Title>Mengapa harus belanja di Sayur.in?</Card.Title>
                <Card.Text>
                    Kami menyediakan sayuran segar organik langsung dari petani pilihan
                </Card.Text>

            </Card.Body>
        </Card>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://carisayur.com/component/mengapa-belanja/terpercaya.svg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://carisayur.com/component/mengapa-belanja/hemat.svg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://carisayur.com/component/mengapa-belanja/cepat.svg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://carisayur.com/component/mengapa-belanja/tepat.svg" />
                </Card>
            </CardGroup></>
        <Button variant="primary">Mulai belanja</Button></>
    );
};

export default Content;