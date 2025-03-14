/**
 * Extracts and returns an error message from an error object.
 *
 * @param {Object} error - The error object.
 * @returns {string} The extracted error message.
 */
export const getErrorMessage = (error) => {
	const response = error.response;
	if (response && response.data) {
		// if error message contains an array with erros, return the first one
		if (response.data.errors) {
			return response.data.errors[0].message;
		} else if (response.data.message) {
			return response.data.message;
		}
	}
	return error.message;
}