SELECT post_title, post_id, to_char(post_date, 'DD Mon YYYY') as post_date, post_image, post_text, vibrant
FROM dear_diary_posts
order by post_id desc