import { useForm, useFormState, useWatch } from "react-hook-form";
import React, { useState } from "react";
import "./MyForm.scss"

export default function ControllerFromScratch() {
    const { 
        register, 
        handleSubmit, 
        control, 
        setValue, 
        watch, 
        formState: { errors } 
    } = useForm({
        defaultValues: {
            lastName: "before",
        }
    });

    const onSubmit = data => console.log(data);

    const Controller = ({control, register, name, rules, render}) => {
        const value = useWatch({
            control, name
        });
        const { errors } = useFormState({control,name});
        console.log(errors);

        const props = register(name, rules);
        return render({
            value,
            onChange: (e) => props.onChange({
                target: {
                    name,
                    value: e.target.value
                }
            }),
            onBlur: props.onBlur,
            name: props.name,
        });
    }

    React.useEffect(() => {
        setTimeout(() => {
            setValue("lastName", "after")
        }, 1000)
    }, [setValue])

    const Input = (props) => {
        const [value, setValue] = React.useState(props.value || "");

        React.useEffect(() => {
            setValue(props.value)
        }, [props.value]);

        return (
            <input 
                name={props.name}
                onChange={(e) =>{
                    setValue(e.target.value);
                    props.onChange && props.onChange(e);
                }}
                value={value}
            />
        )
    }

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
            <li>
                <Controller 
                {...{
                    control,
                    register, 
                    name: 'lastName', 
                    rules: {
                        required: true,
                    }, 
                    render: (props) => <Input {...props}/>
                }} 
                />
                
            </li>
            <li>
                <input type="submit" />
            </li>
        </ul>
    </form>
    )
}