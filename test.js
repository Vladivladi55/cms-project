import React from "react";
import { useForm } from "react-hook-form";

const test = () =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const result = await fetch('http://localhost:5000/test', {mode: 'no-cors'},{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'content-type': 'application/json'}
        }).then(res=>res.json())
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("example")} />
            <input type="submit" />
            </form>
        </div>
    );
}

export default test;