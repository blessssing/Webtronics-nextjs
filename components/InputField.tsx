import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../styles/InputField.module.scss";

interface InputFieldProps {
  name: string;
  errors: any;
}

const InputField: React.FC<InputFieldProps> = ({ name, errors }) => {
  const { register } = useFormContext();

  return (
    <div className={`${styles["wrapper-input"]}`}>
      <input type="text" placeholder={name} {...register(name)} />
      {errors[name]?.message && (
        <p className={styles["tooltip-error-message"]}>
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
