// function embedIdInValue(originalValue: number, id: number): number {
//     // Ensure the original value has 2 decimal places
//     const baseValue = Math.floor(originalValue * 100) / 100;
//
//     // Create the ID part as a fractional number
//     const idFraction = id / Math.pow(10, 6); // Shift ID to the 6th decimal place
//
//     // Combine the base value and ID fraction
//     const newValue = baseValue + idFraction;
//
//     return parseFloat(newValue.toFixed(8)); // Ensure the result has exactly 8 decimal places
// }