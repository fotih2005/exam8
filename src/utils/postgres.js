import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
    connectionString: 'postgres://lwonajck:hH41ESFTYTVoG6BvK2JClYZb68yH20_K@mouse.db.elephantsql.com/lwonajck'
})

export const fetchData = async(SQL, ...params) => {
    const client = await pool.connect()
    try{
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally{
        client.release()
    }
}