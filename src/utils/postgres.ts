import postgres from 'postgres';


const connectionString = process.env.POSTGRES_URL!;
const sql = postgres(connectionString, {
  max:              Number(process.env.POSTGRES_MAX_CONNECTIONS),
  idle_timeout:     Number(process.env.POSTGRES_IDLE_TIMEOUT),    // close idle connection after 10 seconds
  max_lifetime:     Number(process.env.POSTGRES_MAX_LIFETIME),    // close connection after 1 minute
  connect_timeout:  Number(process.env.POSTGRES_CONNECT_TIMEOUT), // close connection after 10 seconds
  connection: {
    application_name: 'nextjs_react_atx'
  },
  debug: (connection, query, params, type) => {
    console.log('connection', { connection });
    console.log('query', { query });
    console.log('params', { params });
    console.log('type', { type });
  }
});


export default sql;
