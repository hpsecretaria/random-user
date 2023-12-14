import { Pagination } from "../types/pagination";
import { User } from "../types/user";
import { get } from "./api";

export const getUsers = async (
  page = 1,
  limit = 20
): Promise<{
  results: User[];
  info: Pagination;
}> => {
  const result = await get<{ results: User[]; info: Pagination }>(
    `https://randomuser.me/api/?page=${page}&results=${limit}&inc=name,id,picture&seed=foobar`
  );
  return result.parsedBody!;
};
