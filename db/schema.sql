create extension citext;

create table users (
  id serial primary key,
  username citext not null unique
);

create table posts (
  id serial primary key,
  author_id int not null references users,
  title text,
  body text,
  created_at timestamptz not null default now()
);
