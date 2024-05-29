import Form             from 'react-bootstrap/Form';
import Row              from 'react-bootstrap/Row';
import Col              from 'react-bootstrap/Col';
import Button           from 'react-bootstrap/Button';
import { useNavigate }  from "react-router-dom";
import { useState }     from 'react';

const SearchForm = () => {
    const [ formData, setFormData ] = useState({ accountId: '' });
    
    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [ name ]: value,
        });
    };
    
    const navigate = useNavigate();
    const handleSubmit = ( event ) => {
        event.preventDefault();

        navigate(`${ formData.accountId }`);
    };

    return (
        <>
            <Form className='d-flex mt-5' onSubmit={ handleSubmit }>
                <Row className='w-100'>
                    <Col sm={9} xs={8}>
                        <Form.Control
                            className=" mr-sm-2"
                            aria-label="Search account"
                            placeholder="Search"
                            type="text"
                            name="accountId"
                            onChange={ handleChange }
                        />
                    </Col>
                    <Col sm={3} xs={4}>
                        <Button type="submit" className='w-100'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default SearchForm;