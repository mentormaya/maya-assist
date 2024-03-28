export interface Date {
  full_int_date: string;
  full_nep_date_eng: string;
  full_nep_date_nep: string;
  int_year_eng: string;
  nep_year_eng: string;
  nep_year_nep: string;
  int_month_eng: string;
  nep_month_nep: string;
  nep_month_eng: string;
  int_date_eng: string;
  nep_date_eng: string;
  nep_date_nep: string;
  day_eng: string;
  day_nep: string;
}


export interface ConvertedDate {
  message: string
  int_date: string
  nep_date: string
  miti: string
}