import React, { useRef} from 'react';
import { Form, Button } from 'react-bootstrap';


export default function TranslationInput({setText, setTextEntered}) {
  const textRef = useRef();
  const buttonStyle = {borderRadius: '0px 10px 10px 0px' };
  const inputStyle = {borderRadius: '10px 0px 0px 10px'};

  function handleSubmit(e) {
    e.preventDefault();

    setText(textRef.current.value);
    setTextEntered(true);
  }



    return (
        <div>
          <Form inline onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="Enter Text Here"
                type="text"
                style={{...inputStyle, height: '50px', resize: 'none'}}
                ref={textRef}
                required
                maxLength="20"
              />
            </Form.Group>
            <Button style={{...buttonStyle, height: '50px', resize: 'none'}}  size="lg" type="submit">Translate</Button>
          </Form>
        </div>
    )
}
