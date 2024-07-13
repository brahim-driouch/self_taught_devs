import { FormFieldProps } from "@/dataSchama";


const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  cssClass
}) => (
  <>
    <input
    className={cssClass}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
    {error && <span className="text-red-500 text-sm">{error.message}</span>}
  </>
);
export default FormField;