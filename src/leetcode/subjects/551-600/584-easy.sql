SELECT
    name
FROM
    customer
WHERE
    referee_id IS NULL OR referee_id != 2
;

-- 注意NULL不能用=来匹配