import { fetchData } from "../../utils/postgres.js";

const get_companys = `
    select * from comppanys
`;

const get_complecs = `
    select
        comppanys.company_name,
        comppanys.img,
        complecs.complecs_id as complecs_id,
        complecs.company_id as company_id,
        complecs.complecs_name as complecs_name
    from
        comppanys
    join
        complecs
    on
        comppanys.company_id = complecs.company_id
    where
        comppanys.company_id = $1;
`;

const compleces = `
    select * from complecs;
`

const get_complecs_rooms = `
    select
        comppanys.company_name,
        complecs.complecs_id as complecs_id,
        complecs.company_id as company_id,
        complecs.complecs_name as complecs_name,
        rooms.room_id as room_id,
        rooms.room_num as room_num,
        rooms.sum as sum,
        rooms.square as square,
        rooms.location as location,
        rooms.sum as sum
    from
        comppanys
    join
        complecs
    on
        comppanys.company_id = complecs.company_id
    join
        rooms
    on
        complecs.complecs_id = rooms.complecs_id
    where
        rooms.complecs_id = $1

`;

const get_room = `
    select
        comppanys.company_name,
        complecs.complecs_id as complecs_id,
        complecs.company_id as company_id,
        complecs.complecs_name as complecs_name,
        rooms.room_id as room_id,
        rooms.room_num as room_num,
        rooms.sum as sum,
        rooms.square as square,
        rooms.location as location,
        rooms.sum as sum
    from
        comppanys
    join
        complecs
    on
        comppanys.company_id = complecs.company_id
    join
        rooms
    on
        complecs.complecs_id = rooms.complecs_id
    where
        rooms.complecs_id = $1 and rooms.room_id = $2
`;

const add_company = `
    call addCompany($1, $2);
`;

const add_complecs = `
    call addComplecs($1, $2)
`;

const add_room = `
    call addRoom($1, $2, $3, $4, $5);
`;

const update_companys = `
    update comppanys set company_name = $1, img = $2 where company_id = $3;
`;

const update_complecs = `
    update complecs set  company_id = $1, complecs_name = $2 where complecs_id = $3;
`;

const delete_complecs = `
    delete from complecs where complecs_id = $1;
`

const delete_company = `
    delete from comppanys where company_id = $1;
`

export const getCompanys = () => fetchData(get_companys);
export const getComplecs = (company_id) => fetchData(get_complecs, company_id);
export const getComplecsRooms = (complecsId) =>
  fetchData(get_complecs_rooms, complecsId);
export const getRooms = (complecsId, roomId) =>
  fetchData(get_room, complecsId, roomId);
export const addCompany = (name, img) => fetchData(add_company, name, img);
export const addComplecs = (companyId, complecsName) =>
  fetchData(add_complecs, companyId, complecsName);
export const addRoom = (complecsId, roomNum, sum, square, location) =>
  fetchData(add_room, complecsId, roomNum, sum, square, location);
export const updateCompany = (companyName = "", companyImg = "", companyId) =>
  fetchData(update_companys, companyName, companyImg, companyId);
export const updateComplecs = (companyId, complecsName, complecsId) =>
  fetchData(update_complecs, companyId, complecsName, complecsId);
export const complecs = () => fetchData(compleces)
export const deleteComplecs = comlecs_id => fetchData(delete_complecs, comlecs_id)
export const deleteCompany = (company_id) => fetchData(delete_company, company_id)