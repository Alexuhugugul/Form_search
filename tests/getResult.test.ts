import { getUsersData, getUsersImage } from "../src/controllers/getListUsers";

const mockData = [
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
];

describe("Result request not void array", () => {
  it("request users", () => {
    expect.assertions(1);

    return getUsersData("we").then((data) => {
      expect(data).toEqual(mockData);
    });
  });

  it("request images", () => {
    expect.assertions(1);

    return getUsersImage(mockData).then((data) => {
      expect(data).toEqual([
        {
          id: 2,
          name: "Ervin Howell",
          nickname: "Antonette",
          url: "https://via.placeholder.com/600/771796",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          nickname: "Elwyn.Skiles",
          url: "https://via.placeholder.com/600/b0f7cc",
        },
      ]);
    });
  });
});
