export function resError(response, error) {
    console.error(error);
    response.status(500).json({ message: error.message });
}