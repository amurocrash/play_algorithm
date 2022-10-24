# Write your MySQL query statement below
SELECT
    t.Email
    FROM
    (SELECT
        COUNT(*) as count,
        Email
    FROM
        Person
    GROUP BY
        Email
    ) AS t
WHERE
    t.count > 1