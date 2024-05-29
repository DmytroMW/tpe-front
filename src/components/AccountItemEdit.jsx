import BEClient             from '../BEClient';
import Form                 from 'react-bootstrap/Form';
import Row                  from 'react-bootstrap/Row';
import Col                  from 'react-bootstrap/Col';
import Button               from 'react-bootstrap/Button';
import accountFieldsName    from '../constants/accountFieldsName';
import AccountContext       from '../provider/AccountContext';
import {
    useNavigate
} from "react-router-dom";
import {
    useContext,
    useState
} from "react";

const AccountItemEdit = () => {
    const { account } = useContext( AccountContext );
    const [ validated, setValidated ] = useState( false );
    const navigate = useNavigate();

    const handleCancel = ( event ) => {
        event.preventDefault();
        navigate(-1);
    }

    const handleSubmit = async ( event ) => {
        try {
            event.preventDefault();
            event.stopPropagation();
            setValidated( true );

            const data = new FormData( event.target );
            const formObject = Object.fromEntries( data.entries() );
            const putBody = {
                id      : account.id,
                address : formObject.address
            }
            await BEClient.put( `/account/${ putBody.id }`, putBody );
            
            navigate(-1);
        } catch ( error ) {
            console.error( error );
        }
    }

    return (
        <>
            { Object.keys( account ).length ? (
                <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                    { Object.entries( account ).map(([ key, value ]) => (
                        <Form.Group 
                            id={ key === "isPaid" ? "is-paid-flag-padding" : '' }
                            as={ Row }
                            key={ key }
                            className="mb-3"
                            controlId={`formPlaintextAccountId${ key }`}
                        >
                            { key === "isPaid"
                                ?   <>  
                                        <Form.Check
                                            disabled
                                        >
                                            <Form.Check.Input xs="5" name={ key } checked readOnly/>
                                            <Form.Check.Label xs="7">{ accountFieldsName[ key ] }</Form.Check.Label>
                                        </Form.Check>
                                    </>
                                :   <>
                                        <Form.Label column xs="5">
                                            { accountFieldsName[ key ] }
                                        </Form.Label>
                                        <Col xs="7">
                                            <Form.Control
                                                name={ key } 
                                                defaultValue={ value }
                                                disabled={ key !== "address" }
                                                required={ key === "address" }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid address.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </>
                            }
                        </Form.Group>
                    ))}
                    <div className="row">
                        <div className="col text-align-center">
                            <Button
                                type="submit"
                                variant="outline-primary"
                                className='w-100'
                                onClick={ handleCancel }
                            >
                                Cancel
                            </Button>
                        </div>
                        <div className="col text-align-center">
                            <Button
                                type="submit"
                                variant="primary"
                                className='w-100'
                            >
                                Save
                            </Button>
                        </div>
                        <div className="col"></div>
                    </div>
                </Form>

            ) : (
                <i>Account not found</i>
            )}
        </>
    )
}

export default AccountItemEdit