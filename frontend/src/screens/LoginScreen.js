import { Form, Button, Row } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormContainer from "../components/FormContainer"
import { useSelector, useDispatch } from 'react-redux'
import { UserAction } from '../actions/userAction'
import RedAlert from '../components/redAlert'


const LoginScreen = () => {
    const UserData = useSelector(state => state.User)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const { loading, userInfo, error } = UserData

    const submitFormHandler = (e) => {
        e.preventDefault();
        dispatch(UserAction(email, password))
    }

    return <FormContainer>
        {(error) && <RedAlert>

        </RedAlert>
        }
        <Form onSubmit={submitFormHandler}>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I have read all Terms and Conditions" onChange={e => console.log(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <Row>Don't have a account?
        <Link to="/register">
                Register Here
      </Link>
        </Row>
    </FormContainer>
}

export default LoginScreen