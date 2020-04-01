export function calculateAge() {
  const birth = new Date("06/29/1998");
  const today = new Date();
  const m = today.getMonth() - birth.getMonth();

  let age = today.getFullYear() - birth.getFullYear();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;

  return age;
}
