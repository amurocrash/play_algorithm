SELECT
  s1.player_id,
  s1.device_id
FROM
  Activity AS s1
JOIN
(
  SELECT
    player_id,
    min(event_date)
  FROM
    Activity
  GROUP BY
    player_id
) AS s2
ON
  s1.player_id = s2.player_id 
  AND s1.event_date = s2.event_date

