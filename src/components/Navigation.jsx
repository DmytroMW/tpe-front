import Container    from 'react-bootstrap/Container';
import Nav          from 'react-bootstrap/Nav';
import Navbar       from 'react-bootstrap/Navbar';
import { Link }     from "react-router-dom";
import UserIcon     from './UserIcon';
import useIsVisible from '../provider/IsVisibleCheck';
import {
    useRef,
    useEffect,
    useState,
} from 'react';


const Navigation = () => {
    const visibilityRef = useRef( null );
    const isVisible = useIsVisible( visibilityRef );
    const [ isOpen, setIsOpen ] = useState( !isVisible );
    const wrapperRef = useRef( null );

    useEffect(() => {
        if ( !isVisible ) return;

        function handleClickOutside( event ) {
            if ( wrapperRef.current && !wrapperRef.current.contains( event.target )) {
                setIsOpen( false );
            }
        }

        document.addEventListener( 'mousedown', handleClickOutside );
        return () => document.removeEventListener( 'mousedown', handleClickOutside );
        
    }, [ wrapperRef, isVisible ]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={ Link } to="/" href="/">Home</Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        onClick={() => setIsOpen( !isOpen )} 
                        ref={ visibilityRef }
                    />
                    { isOpen && (
                        <Navbar.Collapse id="basic-navbar-nav" ref={ wrapperRef }>
                            <Nav className="me-auto">
                                <Nav.Link as={ Link } eventKey="account" href="account" to="/account">Account</Nav.Link>
                                <Nav.Link as={ Link } eventKey="activation" href="activation" to="/activation">Activation</Nav.Link>
                            </Nav>
                            <Nav>
                                <UserIcon />
                            </Nav>
                        </Navbar.Collapse>
                    )}
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;