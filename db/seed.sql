CREATE TABLE dear_diary_posts (
    POST_ID serial primary key,
    USER_ID integer,
    POST_TITLE varChar(100),
    POST_DATE date,
    POST_TEXT text,
    POST_IMAGE varChar
)



INSERT INTO dear_diary_posts(user_id, post_title, post_date, post_text, post_image)
VALUES (1,'My first post', CURRENT_DATE,'Lorem ipsum something something something','https://live.staticflickr.com/4391/36502666360_d2190217b3_k.jpg')

