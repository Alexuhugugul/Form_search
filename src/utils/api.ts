import axios from "axios";

export default function Api<T>(url: string): Promise<T> {
  return axios.get<T>(url).then(({ data }) => {
    return data;
  });
}
