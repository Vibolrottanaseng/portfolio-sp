import { useState, useEffect } from 'react';
import firebaseConfig from '../firebase';

const useForm = (callback, validate) => {
    
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        const {email,password} = e.target.elements;
        
        try{
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
            setErrors(validate(values));
            setIsSubmitting(true);
            
        }catch{
            alert(console.error());
           
        }
        
    };
   

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;