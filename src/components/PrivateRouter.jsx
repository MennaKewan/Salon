import {  Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../contexts/useAuth';

const PrivateRoute = ({ element, role }) => {
  const { auth } = useAuth();
  return auth.token && auth.role === role ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
  role: PropTypes.string.isRequired,
};

export default PrivateRoute;
