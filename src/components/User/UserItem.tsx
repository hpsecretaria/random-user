import React from "react";
import { User } from "../../types/user";
import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";

import { trash } from "ionicons/icons";

type Props = {
  user: User;
  removeFn: () => void;
};

function UserItem({ user, removeFn }: Props): React.ReactElement {
  return (
    <IonItemSliding>
      <IonItem>
        <IonAvatar slot="start">
          <img src={user.picture.thumbnail} alt="avatar" />
        </IonAvatar>
        <IonLabel>{`${user.name.title} ${user.name.first} ${user.name.last}`}</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={() => removeFn()}>
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default UserItem;
