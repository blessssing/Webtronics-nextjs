import * as yup from "yup";
import { IFormInputs } from "../interfaces/FeedbackContact";

export const ContactSchema = yup
  .object({
    name: yup
      .string()
      .min(2, "имя должно иметь не менее 2 букв")
      .required("имя обязательное поле"),
    phone: yup
      .string()
      .min(7, "номер телефона должен иметь не менее 7 цифр")
      .max(17, "номер телефона должен иметь не более 17 цифр")
      .required("телефон обязательное поле"),
    email: yup
      .string()
      .email("неверная почта")
      .max(38, "почта должна иметь не более 38 символов")
      .required("почта обязательное поле"),
  })
  .required();

export const defaultFormContactData: IFormInputs = {
  name: "example",
  phone: "123456789",
  email: "example@jj.com",
};
