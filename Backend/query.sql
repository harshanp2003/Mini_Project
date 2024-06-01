create table users(
u_id serial primary key,
u_name varchar(50),
u_email varchar(45) unique,
u_pswd varchar(255)
);

 const result = await client.query('SELECT u_id as id,u_name as name u_email as email FROM users');



 CREATE TABLE issue_details (
    id SERIAL PRIMARY KEY,
    u_id INT REFERENCES userdetails(u_id),
    street_name VARCHAR(255),
    area VARCHAR(255),
    pincode INT,
    city VARCHAR(50),
    issue VARCHAR(50),
    phone_no VARCHAR(30),
    description VARCHAR(255),
    date DATE,
    file_name VARCHAR(255)
);
