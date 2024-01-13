export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string;
  number: string;
  password: string;
  city: string;
  state: string;
  county: string;
  address: string;
  dependent	: number;
  doj: string;
  dob: string;
}
