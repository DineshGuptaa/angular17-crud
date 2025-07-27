Sample Crud Application in Angular 17
# Prerequisite
  ## Install MySql Database and create database as below
        CREATE USER demo@'%' IDENTIFIED BY 'Tiger1234';
        GRANT ALL PRIVILEGES ON employee.* TO 'demo'@'%' WITH GRANT OPTION;
        ALTER USER 'demo'@'%' IDENTIFIED WITH mysql_native_password BY 'Tiger1234';
        FLUSH PRIVILEGES;

        CREATE TABLE `emp` (
            `id` int NOT NULL,
            `first_name` varchar(50) DEFAULT NULL,
            `last_name` varchar(50) DEFAULT NULL,
            `number` varchar(15) DEFAULT NULL,
            `password` varchar(255) DEFAULT NULL,
            `address` varchar(255) DEFAULT NULL,
            `country` varchar(50) DEFAULT NULL,
            `city` varchar(50) DEFAULT NULL,
            `state` varchar(50) DEFAULT NULL,
            `dependent` int DEFAULT NULL,
            `doj` date DEFAULT NULL,
            `dob` date DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

            --
            -- Indexes for table `emp`
            --
            ALTER TABLE `emp`
            ADD PRIMARY KEY (`id`);
            ALTER TABLE `emp`
            MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
            COMMIT;

            --
            -- Dumping data for table `emp`
            --

            INSERT INTO `emp` (`id`, `first_name`, `last_name`, `number`, `password`, `address`, `country`, `city`, `state`, `dependent`, `doj`, `dob`) VALUES
            (1, 'Vaibhav', 'Shukla', '9876543210', 'password', '123 Main St, Jam Nagar', 'India', 'Jam Nagar', 'Gujrat', 2, NULL, NULL),
            (2, 'Rajat', 'Goyal', '9876543201', 'password', '456 Oak St, Bharatpur', '456 Oak St, Bharatpur', 'Bharatpur', 'Rajsthan', 3, '2022-02-01', '1996-07-05'),
            (3, 'Dinesh', 'Gupta', '9876543202', 'password', '789 Pine St,GB Road', '789 Pine St,GB Road', 'Thane', 'Mumbai', 2, '2022-06-13', '1980-01-01');

# CrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.
  ## Curd App have two component App & backend
    1. backend
    2. an17-curd

## Start Backend Server First
    node server.js
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


