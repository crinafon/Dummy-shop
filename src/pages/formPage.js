import { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormPage() {

    const formRef = useRef();

    const validateForm = () => {
        console.dir(formRef.current);
        return formRef.current[1]?.value?.length === 8;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
            console.log("valid")
        }
        else {
            console.log("invalid")
        }
    }

    return (
        <div className="p-4">
            <Form style={{ maxWidth: '20rem' }} className="m-auto" onSubmit={handleFormSubmit} ref={formRef}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default FormPage;