import React, {useState} from 'react'
import { Form, Button, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    // name,phoneNumber를 redux store로 보내야 한다! 이때 사용하는게 useDispatch
    const dispatch = useDispatch();
    const addContact = (e)=>{
        // Form이 onSubmit을 하면 refresh가 되기 때문에 새로고침 막기
        e.preventDefault();
        // dispatch는 action을 파라미터로 갖고, 이 파라미터는 type과 payload 이라는 키를 가지고있어야 한다! type : 내가 작동할 action의 이름, payload : 넘겨주고 싶은 값
        // dispatch({type: "ADD_CONTACT", payload: {name:name, phoneNumber:phoneNumber}})
        // payload로 넘겨줄 때 key값과 value가 같으면 아래처럼 줄일 수 있다!
        dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber}})
    }
  return (
    <div>
        <Form  onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>이름</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="이름을 입력하세요" 
                    onChange={(e)=>setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="전화번호를 입력하세요" 
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                />
            </Form.Group>
            {/* Button type이 submit이고 Form안에 있으면 클릭 시 onSubmit이 작동된다 */}
            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm