create table Weekdays(
    id serial not null primary key,
    days text not null
);
insert into Weekdays (days) values ('Sunday');
insert into Weekdays (days) values ('Monday');
insert into Weekdays (days) values ('Tuesday');
insert into Weekdays (days) values ('Wednesday');
insert into Weekdays (days) values ('Thursday');
insert into Weekdays (days) values ('Friday');
insert into Weekdays (days) values ('saturday');

create table employees(
    id serial not null primary key,
    names text not null
);


create table waiters_shift(
    id serial not null primary key,
    day_id int,
    waiters_id int,
    foreign key(day_id) references weekdays(id),
    foreign key(waiters_id) references employees(id)
);


