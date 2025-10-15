import { message, superValidate } from "sveltekit-superforms";
import { yup } from "sveltekit-superforms/adapters";

import { emailSignupSchema } from "@molecules/email-signup/model";
import { type Actions, fail } from "@sveltejs/kit";

export const load = async () => {
	// Creates an initial, empty form object
	const emailSignupForm = await superValidate(yup(emailSignupSchema));

	// Makes It Globally Available
	return { emailSignupForm };
};

// Server actions
export const actions: Actions = {
	"email-signup": async ({ request }) => {
		// Extract and validate form data
		const emailSignupForm = await superValidate(request, yup(emailSignupSchema));

		// Check if data is valid, and if it is not return 400
		if (!emailSignupForm.valid) {
			return fail(400, { emailSignupForm });
		}

		// Log data out
		console.log("Newsletter signup:", emailSignupForm.data.email);

		// Send success response back
		return message(emailSignupForm, "Newsletter signup successful!");
	}
};
