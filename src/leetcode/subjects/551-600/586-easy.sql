# SELECT
#     t1.customer_number
# FROM
# (
#     SELECT
#         customer_number,
#         COUNT(customer_number) AS count
#     FROM
#         Orders
#     GROUP BY
#         customer_number
# ) AS t1
# JOIN
# (
#     SELECT
#         MAX(t.count) AS max
#     FROM
#     (
#         SELECT
#             customer_number,
#             COUNT(customer_number) AS count
#         FROM
#             Orders
#         GROUP BY
#             customer_number
#     ) AS t
# ) AS t2
# ON
#     t1.count = t2.max
# ;

SELECT
    customer_number
FROM
    Orders
GROUP BY
    customer_number
ORDER BY
    COUNT(*) DESC
LIMIT
    1
;