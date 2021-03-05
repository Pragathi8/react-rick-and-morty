import React, { useState, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [initialized, setInitialized] = useState(false);
    const [error, setError] = useState(null);

    const requestInterceptor = axios.interceptors.request.use(req => {
      setError(null);
      return req;
    });

    const responseInterceptor = axios.interceptors.response.use(
      res => res,
      error => {
        setError(error);
      }
    );
    // setInitialized(true);

    useEffect(() => {
      setInitialized(true);
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      }
    }, [requestInterceptor, responseInterceptor]);


    const errorConfirmedHandler = () => setError(null);

    if (!initialized) return null;

    return (
      <>
        <Modal
          show={error}
          modalClosed={errorConfirmedHandler}
        >
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  }
};

export default withErrorHandler;
