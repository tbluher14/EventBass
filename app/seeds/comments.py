from app.models import db, Comment

def seed_comments():
    comment1 = Comment (
        comment='Demo',
        user_id=1,
        event_id=1

    )
    comment2 = Comment (
        comment='Demo',
        user_id=1,
        event_id=2

    )
    comment3 = Comment (
        comment='Demo',
        user_id=1,
        event_id=3

    )
    comment4 = Comment (
        comment='Demo',
        user_id=1,
        event_id=4

    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
