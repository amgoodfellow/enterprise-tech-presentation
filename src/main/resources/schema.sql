create table if not exists feedback (
    id serial primary key,
    rating integer not null,
    body text,
    category text
);