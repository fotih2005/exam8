-- CREATE TABLE comppanys(
-- 	        company_id uuid default uuid_generate_v4() unique primary key,
--   	company_name varchar(64)
-- );

-- CREATE TABLE complecs(
-- 	complecs_id uuid default uuid_generate_v4() unique primary key,
--   	company_id uuid references comppanys(company_id) on delete set null,
--   	complecs_name varchar(64)
-- );

-- CREATE TABLE rooms(
-- 	room_id uuid default uuid_generate_v4() unique primary key,
--   	complecs_id uuid references complecs(complecs_id) on delete set null,
--   	room_num integer,
--         sum integer,
--         square INTEGER,
--         location varchar
-- );

-- CREATE TABLE banks(
--     bank_id uuid default uuid_generate_v4() unique primary key,
--     bank_name varchar,
--     bank_img varchar,
--     max_year integer,
--     min_year integer,
--     max_sum bigint,
--     min_sum bigint,
--     percentage integer
-- );

-- CREATE TABLE users(
--     user_id uuid default uuid_generate_v4() unique primary key,
--     user_name varchar(32),
--     user_password varchar,
--     user_role varchar(10) DEFAULT 'admin'
-- );

-- INSERT INTO comppanys(company_name, img) values('Murad buildings', 'http://www.uzdaily.com/storage/img/Askar-foto/LOT-4_Night%20(1).jpg');
-- INSERT INTO complecs(company_id, complecs_name) values('87125393-99b3-427b-8620-651e85403c96', 'Nest One');
-- INSERT INTO rooms(complecs_id, room_num) values('e1d9bd0d-3ea7-496d-bee8-0e8af226b58f', 3);
-- INSERT INTO banks(bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage) values('Anor Bank', 'https://bankxizmatlari.uz/upload/iblock/46d/7jjh6ahpmghxh9rodqll0j5
-- INSERT INTO users(user_name, user_password) VALUES('Eshmat', crypt('123abs', gen_salt('bf')));


-- CREATE procedure addCompany(
--     companyName varchar,
--     companyImg varchar
-- )
-- language plpgsql
-- as $$
-- begin
--     INSERT INTO comppanys(company_name, img) values(companyName, companyImg);
-- end
-- $$;

-- CREATE procedure addComplecs(
--     companyId uuid,
--     complecsName varchar
-- )
-- language plpgsql
-- as $$
-- begin
--     INSERT INTO complecs(company_id, complecs_name) values(companyId, complecsName);
-- end
-- $$;

-- CREATE procedure addRoom(
--     complecs_id uuid,
--     room_num integer,
--     sum integer,
--     square integer,
--     location varchar
-- )
-- language plpgsql
-- as $$
-- begin
--     INSERT INTO rooms(complecs_id, room_num, sum, square, location) values(complecs_id, room_num, sum, square, location);
-- end
-- $$;

-- CREATE procedure addBank(
--     bank_name varchar,
--     bank_img varchar,
--     max_year integer, 
--     min_year integer,
--     max_sum integer,
--     min_sum integer, 
--     percentage integer
-- )
-- language plpgsql
-- as $$
-- begin
        --INSERT INTO banks(bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage)
        -- values(bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage);
-- end
-- $$;