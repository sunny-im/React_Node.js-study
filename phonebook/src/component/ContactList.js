import React, {useState,useEffect} from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem';
// redux store에서 읽어오기!
import { useSelector } from 'react-redux';

const ContactList = () => {
    //useSelector는 매개변수로 함수를 받는다. 이 함수는 store에 있는 state를 매개변수로 갖는다. 그 중에서도 필요한 contactList 값을 가져온 것!
    const {contactList, keyword} = useSelector((state)=>state);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        if (keyword !== ""){
            let list = contactList.filter((item)=>item.name.includes(keyword));
            setFilteredList(list);
        } else {
            setFilteredList(contactList); 
        }
    },[keyword])
    return (
        <div>
            <SearchBox/>
            <div>
                num: {filteredList.length}
                {filteredList.map((item)=>(
                    <ContactItem item={item}/>
                ))}
            </div>
            {/* {contactList.map((item)=>(
                <ContactItem item={item}/>
            ))} */}
        </div>
    )
}

export default ContactList