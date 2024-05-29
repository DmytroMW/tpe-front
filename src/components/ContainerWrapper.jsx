import React                from 'react';
import CardPlaceholder      from './CardPlaceholder';
import AccountBodyContainer from './AccountBodyContainer';

// eslint-disable-next-line react/prop-types
const ContainerWrapper = ({ title }) => {
      return (
        <>
            <div className="container">
                { 
                    title && <h1 className="my-5 text-center">{ title }</h1> 
                }
                <div className="row  align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
                        { 
                            title
                            ? <CardPlaceholder/>
                            : <AccountBodyContainer />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContainerWrapper;