import axios from "axios";

export const sapi = "https://sapi.deta.dev";

export const password_endpoint = "/generate/password"
export const pin_endpoint = "/generate/pin"
export const number_endpoint = "/utils/numbers/nep_num"


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

export const generatePassword = async () => {
  const res = await axios.get(`${sapi}${password_endpoint}`)
  return res.data
}

export const generatePIN = async () => {
  const res = await axios.get(`${sapi}${pin_endpoint}`)
  return res.data
}

export const convetNumber = async (num: string) => {
  const res = await axios.get(`${sapi}${number_endpoint}/${num}`)
  return res.data
}
