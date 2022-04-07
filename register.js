import {useForm} from 'react-hook-form';

const Register = () =>{ 
    const {handleSubmit} = useForm();
    const onSubmit = (data) => {
        const user = fetch('http://localhost:5000/register',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type':'application/json'},
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(res => res.json())
        .then(data=>console.log(data))
      }
    return(
        <div className='register'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='name' placeholder='Name' type='text'/>
            <input name='email' placeholder='Email' type='email'/>
            <input name='password' placeholder='Password' type='password'/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    );
}

export default Register;