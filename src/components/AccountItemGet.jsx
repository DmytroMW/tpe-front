import BEClient             from "../BEClient";
import Form                 from 'react-bootstrap/Form';
import Row                  from 'react-bootstrap/Row';
import Col                  from 'react-bootstrap/Col';
import Button               from 'react-bootstrap/Button';
import AccountContext       from "../provider/AccountContext";
import { useContext }       from "react";
import accountFieldsName    from '../constants/accountFieldsName';
import {
    useLoaderData,
    useNavigate
} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export async function accountLoader({ params }) {
    try {
        const { 
            data: { data: account } 
        } = await BEClient.get(`/account/${ params.accountId }`);
        
        return { account };

    } catch( error ) {
        console.error('accountLoader -> error', error);
        return null;
    }
}

const AccountItemGet = () => {
    const { account } = useLoaderData();
    const { setAccount } = useContext( AccountContext );

    const navigate = useNavigate();
    const handleEdit = ( event ) => {
        event.preventDefault();
        setAccount( account );

        navigate( 'edit' );
    };

    return (
        <>
            { account && Object.keys( account ).length ? (
                <Form>
                    { Object.entries( account ).map(([ key, value ]) => (
                        <Form.Group 
                            id={ key === "isPaid" ? "is-paid-flag-padding" : '' }
                            as={ Row }
                            key={ key }
                            className="mb-3"
                            controlId={`formPlaintextAccountId${ key }`}
                        >
                            { key === "isPaid"
                                ?<>  
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
                                            <Form.Control plaintext readOnly defaultValue={ value } />
                                        </Col>
                                    </>
                            }
                        </Form.Group>
                    ))}
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-align-center">
                            <Button
                                type="submit"
                                variant="outline-primary"
                                className='w-100'
                                onClick={ handleEdit }
                            >
                                Edit
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

export default AccountItemGet