export function getAge(): string {
  const birthDate = new Date("1998-09-22"); 
  const today = new Date();

  const diff = today.getTime() - birthDate.getTime();

  const age = diff / (1000 * 60 * 60 * 24 * 365);

  return age.toFixed(9);
}