export function generateSignalHash(event: any): string {
  return "sig_" + Math.random().toString(36).substring(2, 10);
}
