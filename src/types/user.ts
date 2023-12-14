export type User = {
  name: Name;
  picture: Picture;
  id: ID;
};

export type ID = {
  name: string;
  value: string;
};

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};
