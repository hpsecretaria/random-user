import React, { useEffect } from "react";

import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from "@ionic/react";

import { useListUsers } from "../hooks/useListUsers";
import UserItem from "../components/User/UserItem";

function User(): React.ReactElement {
  const { users, loadUsers, removeUser } = useListUsers();

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IonContent>
        <IonList>
          {users.map((user) => (
            <UserItem key={`user-${JSON.stringify(user.name)}`} user={user} removeFn={() => removeUser(user)} />
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            loadUsers();
            setTimeout(() => ev.target.complete(), 500);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </>
  );
}

export default User;
