from app.models import db, Comment

x = range(1,10, 2)
y = range(2, 10, 2)

def seed_comments():
    for num in x:
        comment1 = Comment (
            comment="Yooo this is going to be a good one! We'll see you there!",
            user_id=1,
            event_id=num
        )
        comment2 = Comment (
            comment='Our whole team already got tickets! So stoked!',
            user_id=2,
            event_id=num
        )
        comment3 = Comment (
            comment='We heard you guys were bringing in the Funktion 1 Production... Bass is about to be LOUD!',
            user_id=3,
            event_id=num
        )
        comment4 = Comment (
            comment="Huge announcment.. happy for you guys... We'll promote on our pages!",
            user_id=4,
            event_id=num
        )
        db.session.add(comment1)
        db.session.add(comment2)
        db.session.add(comment3)
        db.session.add(comment4)
        db.session.commit()

    for num in y:
        comment1 = Comment (
            comment="Been looking forward to this one for a while now, we are so excited!",
            user_id=1,
            event_id=num
        )
        comment2 = Comment (
            comment='Our whole team already got tickets! So stoked!',
            user_id=2,
            event_id=num
        )
        comment3 = Comment (
            comment='Will there be liquor sales at the venue? Thanks!',
            user_id=3,
            event_id=num
        )
        comment4 = Comment (
            comment="This is bound to be the highlight of the season... we'll see you there! ",
            user_id=4,
            event_id=num
        )
        db.session.add(comment1)
        db.session.add(comment2)
        db.session.add(comment3)
        db.session.add(comment4)
        db.session.commit()



def undo_comments():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
