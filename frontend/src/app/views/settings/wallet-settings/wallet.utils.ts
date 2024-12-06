export function validateEthereumAddress(address: string): boolean {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
}
 
export function validateSolanaAddress(address: string): boolean {
    const regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return regex.test(address);
}
  