import { Alert } from "react-bootstrap";

const RedAlert = ({ children }) => {
  return <Alert variant="danger">{children ? children : <div>"This is a alert—check it out!"</div>}</Alert>;
};

export default RedAlert;
