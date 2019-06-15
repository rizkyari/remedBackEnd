create database remedialbackend;

use remedialbackend;

create table karyawan (
id int auto_increment primary key,
nama varchar(50) not null,
tahun_lahir int(7) not null,
kota_kelahiran varchar(50) not null,
status_nikah varchar(20) not null
);

select * from karyawan;

