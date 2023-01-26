import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import Button from "./Button";
import {
  ContactSchema,
  defaultFormContactData,
} from "../schemas/ContactSchema";
import { IFormInputs } from "../interfaces/FeedbackContact";
import InputField from "./InputField";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { feedbackAddContact } from "../redux/Slices/FeedbackSlice";

const Contact = () => {
  const [showSendSuccess, setShowSendSuccess] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const methods = useForm<IFormInputs>({
    mode: "onChange",
    resolver: yupResolver(ContactSchema),
    defaultValues: defaultFormContactData,
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const showModalSuccess = () => {
    setShowSendSuccess((prev) => !prev);
    setDisabled((prev) => !prev);
  };

  const onSubmit = async (data: IFormInputs) => {
    try {
      dispatch(feedbackAddContact(data));
      showModalSuccess();
      reset();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section className={styles["section-contact"]}>
      <h2 id="contact" className={styles["title"]}>
        Contact us
      </h2>
      <p className={styles["p1"]}>
        Do you have any kind of help please contact with us.
      </p>

      <FormProvider {...methods}>
        <form
          className={styles["form-container"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField name="name" errors={errors} />
          <InputField name="phone" errors={errors} />
          <InputField name="email" errors={errors} />
          <div className={styles["btn-submit-wrapper"]}>
            <Button
              className={styles["btn-submit"]}
              type="submit"
              disabled={disabled}
            >
              Send
            </Button>
          </div>
          {showSendSuccess && (
            <div className={styles["show-send-success"]}>
              <h5>Form sent successfully</h5>
              <button
                onClick={showModalSuccess}
                className={styles["close-modal"]}
              >
                Close
              </button>
            </div>
          )}
        </form>
      </FormProvider>
    </section>
  );
};

export default Contact;
