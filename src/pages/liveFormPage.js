import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LiveFormPage = () => {

    const [error, setError] = useState({})

    const validate = (fieldName, fieldValue) => {
        setError({})
        if (fieldName === "email" && !fieldValue.includes('@')) {
            const temp = {...error};
            temp[fieldName] = "Not a valid email address!"
            setError(temp);
            return false;
        }
        else if (fieldName === "password" && fieldValue.length !== 8) {
            const temp = {...error};
            temp[fieldName] = "Password length should be 8 chars"
            setError(temp);
            return false;
        }
        return true
    }

    const handleChange = (e) => {
        if (validate(e.target.name, e.target.value)) {
            console.log(e.target.name, e.target.value)
        }
        console.log("invalid")
    }

    console.log(error)

    return (
        <div className="p-4">
            <Form style={{ maxWidth: '20rem' }} className="m-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                   {error?.email && <Form.Text style={{ color: 'red' }}>
                        {error?.email}
                    </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                    {error?.password && <Form.Text style={{ color: 'red' }}>
                        {error?.password}
                    </Form.Text>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default LiveFormPage