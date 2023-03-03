import * as React from "react";
import { useForm, useController } from "react-hook-form";
import "./MyForm.scss";

function Input(props) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.error ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function ReusableController() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: ""
    },
    mode: "onChange"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>useController</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="FirstName" rules={{ required: true }} />
        <input type="submit" />
      </form>
    </div>
  );
}