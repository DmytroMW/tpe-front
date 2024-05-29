/* eslint-disable react/prop-types */

const AbsentConnection = ({ error }) => {
    return <>
      <h1 className="text-align-center">
        {`${ error.name }: ${ error.message }`}
      </h1>
    </>;
};
  
export default AbsentConnection;