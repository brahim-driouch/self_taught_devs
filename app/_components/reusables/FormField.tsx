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
    {error && <span className="error-message">{error.message}</span>}
  </>
);
export default FormField;