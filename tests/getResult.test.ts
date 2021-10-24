import axios from "axios";
import { getUsersData } from "../src/controllers/getListUsers";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";

it("Result request not void array", () => {
  // expect.assertions(1);

  return getUsersData("we").then((data) => {
    expect(data).toEqual([
      {
        id: 2,
        name: "Ervin Howell",
        nickname: "Antonette",
        url: undefined,
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        nickname: "Elwyn.Skiles",
        url: undefined,
      },
    ]);
  });
});
