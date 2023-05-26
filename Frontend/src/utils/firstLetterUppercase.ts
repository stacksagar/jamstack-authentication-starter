export default function firstLetterUppercase(str: string) {
  const value = typeof str === "string" ? str : str[0];
  if (typeof value !== "string") return;
  return value[0]?.toUpperCase() + value?.slice(1).toLowerCase();
}
