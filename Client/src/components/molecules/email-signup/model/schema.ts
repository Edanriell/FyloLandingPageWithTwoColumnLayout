import * as yup from "yup";

export const emailSignupSchema = yup.object({
	email: yup.string().required("Email is required").email("Please check your email")
});

export type EmailSignupSchema = yup.InferType<typeof emailSignupSchema>;
