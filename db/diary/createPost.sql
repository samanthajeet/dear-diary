INSERT INTO dear_diary_posts(user_id, post_title, post_date, post_text, post_image, vibrant)
VALUES (1,${post_title}, CURRENT_DATE,${post_text},${post_image}, ${vibrant});

SELECT post_title, post_id, to_char(post_date, 'DD Mon YYYY') as post_date, post_image, post_text, vibrant
FROM dear_diary_posts
order by post_id desc
