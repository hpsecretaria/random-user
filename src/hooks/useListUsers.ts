import { useState } from "react";

import { getUsers } from "../api/user";
import { User } from "../types/user";
import { useListState } from "./useListState";

const LIMIT = 20;
const MAXUSERS = 100;

export const useListUsers = () => {
  const { items, addItem, removeItem } = useListState<User>([]);
  const [page, setPage] = useState(1);

  const loadUsers = async () => {
    if (items.length >= MAXUSERS) return;
    const response = await getUsers(
      page,
      Math.min(LIMIT, MAXUSERS - items.length)
    );
    setPage((currentPage) => currentPage + 1);

    response.results.forEach((user) => {
      addItem(user);
    });
  };

  return { users: items, loadUsers, removeUser: removeItem };
};
