import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';

const Form = (props) => {

    const [formInputFieldValues,setFormInputFieldValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        description: ''
    })

    const [invalidFields, setInvalidFields] = useState([]);

    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const descriptionRef = useRef();
    
    const updateEmailValue = () => {
        setFormInputFieldValues( prevState => {
            let updatedState = {
                ...prevState,
                email: emailRef.current.value
            }
            return updatedState
        })
    }
    const updateFirstNameValue = () => {
        setFormInputFieldValues( prevState => {
            let updatedState = {
                ...prevState,
                firstName: firstNameRef.current.value
            }
            return updatedState
        })
    }
    const updateLastNameValue = () => {
        setFormInputFieldValues( prevState => {
            let updatedState = {
                ...prevState,
                lastName: lastNameRef.current.value
            }
            return updatedState
        })
    }
    const updateDescriptionValue = () => {
        setFormInputFieldValues( prevState => {
            let updatedState = {
                ...prevState,
                description: descriptionRef.current.value
            }
            return updatedState
        })
    }



    useEffect( () => {
        //console.log('useEffect and value of formInputFieldValues.email is ',formInputFieldValues.email)
        //console.log('result of formInputFieldValues.email.includes("@")',formInputFieldValues.email.includes('@'))
        if(formInputFieldValues.email.includes('@')) {
            console.log('im in the if where it includes @')
            console.log('logging invalidFields in @ if',invalidFields)
            const foundIdx = invalidFields.findIndex( el => el === 'email')
           // const itemIndex = state.items.findIndex( item => item.id === action.item.id);
            console.log('logging foundIdx in @ if', foundIdx)

            if(foundIdx > -1) {
                setInvalidFields(prevState => {
                    let newState;
                    newState = [
                        ...prevState.splice(foundIdx)
                    ];
                    return newState
    
                });
            }


        }else {
            //console.log('im in else case')
            const foundIdx = invalidFields.findIndex((el) => el === 'email')
            const existingItem = invalidFields[foundIdx];

            console.log('logging existingItem',existingItem)
            if(existingItem){
                console.log('im in second if')
                return;
            }
            else {
                console.log('im in second else')
                setInvalidFields(prevState => {
                    let newState = [
                        ...prevState
                    ]
                    newState.push('email');
                    return newState
                }) 
            }
        }
    },[formInputFieldValues.email,invalidFields])

    console.log('logging formInputFieldValues ', formInputFieldValues)
    console.log('logging invalidFields ',invalidFields)


    return (
        <form>
                
      <div>
      <TextField
          error={invalidFields.includes('email') ? true : false }
          inputRef={emailRef}
          onBlur={updateEmailValue}
          id="outlined-required"
          label="Required"
        />
                <TextField
                inputRef={firstNameRef}
                onBlur={updateFirstNameValue}
          required
          id="outlined-required"
          label="Required"
        />
                <TextField
                onBlur={updateLastNameValue}
                inputRef={lastNameRef}
          required
          id="outlined-required"
          label="Required"
        />
                <TextField
                onBlur={updateDescriptionValue}
                inputRef={descriptionRef}
          id="outlined-required"
          label="Required"
        />
              <Button variant="outlined">Outlined</Button>
      </div>
            </form>
    )
}

export default Form;