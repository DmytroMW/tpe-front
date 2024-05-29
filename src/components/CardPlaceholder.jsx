import React            from 'react';
import Card             from 'react-bootstrap/Card';
import Placeholder      from 'react-bootstrap/Placeholder';
import { useEffect }    from 'react';

const CardPlaceholder = () => {
    useEffect(() => {
        if ( window.Holder ) {
            window.Holder.run();
          }
      }, []);

      return (
        <>
            <Card className="m-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" data-src="holder.js/100px180" alt="placeholder"/>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
        </>
    );
};

export default CardPlaceholder;