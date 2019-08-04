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

VALUES (1,'My third post', CURRENT_DATE,'Lorem ipsum something something something','https://live.staticflickr.com/2834/33861476492_05bc3b18e5_k.jpg')
VALUES (1,'Edinburgh', CURRENT_DATE,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero id felis vestibulum vehicula. Suspendisse hendrerit metus at est vehicula, nec malesuada leo ultricies. Nunc finibus enim a quam egestas iaculis. Fusce venenatis risus nec diam porta, condimentum lobortis tortor iaculis. Ut porta, mi in tempus semper, lacus lorem convallis risus, ut rutrum diam felis a leo. Praesent mattis volutpat interdum. Donec vitae sollicitudin ante, non tempus lacus. Sed diam ipsum, congue blandit ultricies placerat, ullamcorper pharetra nisi. Donec varius faucibus lorem at semper. Suspendisse potenti. Nulla eu nunc consectetur, efficitur mauris in, rutrum dui. Phasellus venenatis orci in viverra volutpat. Proin gravida orci ante. Etiam bibendum justo ut est sollicitudin iaculis. Donec consectetur lectus quis quam tristique eleifend id ac erat.

Aenean eget fringilla est, nec lacinia dui. Sed mollis suscipit orci, nec viverra ligula. Mauris sed rutrum lorem, in malesuada velit. Ut a mi libero. Ut tristique elit vitae lectus bibendum cursus. Pellentesque tellus metus, convallis vehicula rhoncus nec, vulputate vel lectus. Donec tempus blandit urna, iaculis porttitor lorem tincidunt quis. Nullam fringilla a lacus nec consequat. Nulla bibendum viverra porttitor. Nullam tincidunt lectus auctor tortor aliquam, sit amet auctor felis dictum. Quisque varius consectetur faucibus. Integer ut magna sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id tempus ipsum, sed semper augue. Fusce ullamcorper vulputate semper. Proin venenatis faucibus scelerisque.','https://live.staticflickr.com/3696/32667805683_11c2bf44cc_k.jpg')

create table dear_diary_users(
    user_id serial primary key,
    username varchar(20),
    email varchar(200),
    password varchar(25),
    hash varChar(50)
)


insert into dear_diary_users(username, email, password)
values ('samjeet', 'samanthajeet@gmail.com', 'test')