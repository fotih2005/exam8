import { fetchData } from "../../utils/postgres.js";

const get_banks = `
    SELECT 
        banks.bank_id as bank_id,
        banks.bank_name as bank_name,
        banks.bank_img as bank_img,
        banks.max_year as max_year,
        banks.min_year as min_year,
        banks.max_sum / 100 * banks.percentage  as starting_paymet,
        (banks.max_sum - banks.max_sum / 100 * banks.percentage) / 100 as mouth,
        banks.max_sum / 100 * 2 as service,
        banks.min_sum as min_sum,
        banks.max_sum as max_sum,
        banks.percentage as percentage
    FROM 
        banks
    WHERE
        banks.max_year >= $1
    and
        banks.min_year <= $2
    and
        banks.max_sum >= $3
    and
        banks.min_sum <= $4;
`;

const banks = `
    select * from banks
`

const add_bank = `
    call addBank($1, $2, $3, $4, $5, $6, $7)
`;

const update_bank = `
    update banks set bank_name = $1, bank_img = $2, max_year = $3, min_year = $4, max_sum = $5, min_sum = $6, percentage = $7 where bank_id = $8;
`

const delete_bank = `
    delete from banks where bank_id = $1
` 

export const getBakns = (maxYear, minYear, maxSum, minSum) =>
  fetchData(get_banks, maxYear, minYear, maxSum, minSum);

export const addBank = (bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage) =>
    fetchData(add_bank, bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage);

export const updateBank = (bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage, bank_id) => 
    fetchData(update_bank, bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage, bank_id)

export const deleteBank = bank_id => fetchData(delete_bank, bank_id)

export const bank = () => fetchData(banks)