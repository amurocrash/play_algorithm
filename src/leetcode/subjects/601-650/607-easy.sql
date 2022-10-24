SELECT
    name
FROM
    SalesPerson
WHERE
    sales_id NOT IN
(
    SELECT
        sales_id
    FROM
        Orders AS o
    WHERE
        o.com_id IN
    (
        SELECT
            com_id
        FROM
            Company
        WHERE
            name = 'RED'
    )
)
;