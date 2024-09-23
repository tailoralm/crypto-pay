export function resError(error, response) {
    console.error(error);
    response.status(500).json({ message: error.message });
}