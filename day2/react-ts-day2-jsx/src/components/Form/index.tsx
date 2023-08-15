import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  firstName: string;
  age: number;
}
const schema = yup
  .object({
    firstName: yup.string().required("NHAP FIRST NAME"),
    age: yup.number().positive().integer().required(),
  })
  .required();
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      <input {...register("age")} />
      <p className="text-rose-800">{errors.age?.message}</p>
      <button type="submit">Submit</button>
      <div className="text-emerald-700">huy</div>
    </form>
  );
}
