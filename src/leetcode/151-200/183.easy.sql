# Write your MySQL query statement below
SELECT
    c.Name as Customers
FROM
    Customers as c
WHERE
    c.id not in 
    (
        SELECT 
            CustomerId 
        FROM 
            Orders
    )
;