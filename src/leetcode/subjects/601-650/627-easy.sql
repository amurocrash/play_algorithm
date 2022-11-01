/* Update
  Salary
SET
  sex = 
    CASE sex
    WHEN 'm' THEN 'f'
    ELSE 'm'
    END
; */

Update
    Salary
SET
    sex = IF(sex = 'm', 'f', 'm')
;
