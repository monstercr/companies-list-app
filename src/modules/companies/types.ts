export interface Company {
  id: number;
  name: string;
  city: string;
}

export interface Companies {
  data: Company[];
  error: boolean;
  requesting: boolean;
}
