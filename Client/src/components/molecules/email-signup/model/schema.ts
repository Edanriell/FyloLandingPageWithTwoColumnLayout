import * as yup from "yup";

import { m } from "$lib/paraglide/messages.js";

export const emailSignupSchema = yup.object({
	email: yup.string().required(m.email_required()).email(m.email_check())
});

export type EmailSignupSchema = yup.InferType<typeof emailSignupSchema>;
