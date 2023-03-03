import { useForm, Controller } from "react-hook-form";
import DownShift from "./DownShift";
import React, { useState } from "react";
import "./MyForm.scss"

const defaultValues = {
    downShift: "apple",
  };

export default function MyController() {
      const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
      const [data, setData] = useState(null);

    return(
        <form onSubmit={handleSubmit((data) => setData(data))} className="form">\
            <ul>
                <li>
                    <Controller
                        render={({ field: { ref, ...rest } }) => <DownShift {...rest} />}
                        control={control}
                        name="downShift"
                    />
                </li>
            </ul>
        </form>
    )
}