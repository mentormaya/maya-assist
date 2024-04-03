// Define the reverse mapping function
export const keyOf = <T extends { [key: string]: string }>(value: string, enumObj: T): keyof T | undefined =>
Object.keys(enumObj).find(key => enumObj[key as keyof T] === value);


export const enumToArray = <T extends Record<string, string | number>>(enumObj: T) => {
  const keys = Object.keys(enumObj) as Array<keyof T>;
  const values = Object.values(enumObj) as Array<T[keyof T]>;
  return { keys, values };
};