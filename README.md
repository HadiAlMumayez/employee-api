"# employee-api" 

* Description 
>
> This is a REST API written using Node.js, Express, Knex and using MySQL. 
> 
> You can run the migration by type this in the terminal: 
>
> `npm run migrate` .
>
> You can seeding the database by type this in the terminal:
> 
> `npm run seed` .
>
* Documentation
>
> We have 5 endpoints:
>
>1. `GET    /employees?page=[1]` : 
>
>
>   ```Retrieve a list of employees. ?page=[number of a page] is a parameter for pagination.```
>
>
>2. `GET    /employees/{id}` : 
>
>   ```Retrieve a single employee by its ID number.```
>
>
>3. `POST    /employees` : 
>
>   ```Creates a new employee. should include a body with (name, date_of_joining, department, salary).```
>
>
>4. `PATCH    /employees/{id}` : 
>
>   ```Update a single employee by its ID number.```
>     ```Should include a body with the item or items we need to update (name, date_of_joining, department or salary).```
>
>
>5. `DELETE    /employees/{id}` : 
>
>    ```delete an employee by its ID.```
>

