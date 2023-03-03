import { useForm, useFormState, useWatch } from "react-hook-form";
import React, { useState } from "react";
import "./MyForm.scss"

export default function MyForm() {
    const { 
        register, 
        handleSubmit, 
        control, 
        setValue, 
        watch, 
        formState: { errors } 
    } = useForm({
        defaultValues: {
            fname: "",
            lname: "",
            email: "",
            address: "",
            donate: 20,
            lastName: "before",
        }
    });
    const onSubmit = data => console.log(data);

    // console.log(watch("email"));
    // console.log(watch("fname"));
    // console.log(watch("lname"));
    //console.log(watch("address"));
    console.log(watch(errors));
    
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <ul>
        <li>
            <input /*defaultValue="test"*/ placeholder="First Name" 
            {...register("fname", 
                { required: "this is required",
                minLength: {
                    value: 4,
                    message: "min length is 4"        
                }
            })} />
            {errors.fname && <span>This field is required</span>}
        </li>
        
        <li>
            <input /*defaultValue="test"*/ placeholder="Last Name" {...register("lname", { required: true })} />
            {errors.lname && <span>This field is required</span>}
        </li>
        
        <li>
            <input /*defaultValue="test"*/ placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
        </li>
        
        <li>
            <input placeholder="Address" {...register("address", { required: true })}/>
            {errors.address && <span>This field is required</span>}
        </li>
        <li>
            <input placeholder="Donate Amount" {...register("donate", { required: true })}/>
            {errors.donate && <span>This field is required</span>}
        </li>

        <li>
            <input type="submit" />
        </li>
        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
      </ul>
      
    </form>
    )
}