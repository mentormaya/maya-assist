const sapi = "https://sapi.deta.dev";

export const getDate = (url: string) => {
  // return (await ).json()
  const date = fetch(`${sapi}${url}`).then((res) => res.json());
  return date;
};

export const convertNepaliDate = async (date: string) => {
  const engDate = await (await fetch(`${sapi}/date/to/int/${date}`)).json();
  console.log(
    `Converting nepali date ${engDate.nep_date} in to ${engDate.int_date}`,
  );
  return engDate;
};

export const convertEnglishDate = async (date: string) => {
  const nepDate = await (await fetch(`${sapi}/date/to/nep/${date}`)).json();
  console.log(
    `Converting english date ${nepDate.int_date} in to ${nepDate.nep_date}`,
  );
  return nepDate;
};
