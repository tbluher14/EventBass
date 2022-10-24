from app.models import db, Comment

def seed_comments():
    comment1 = Comment (
        comment='Demo',
        user_id=1,
        event_id=1

    )

    db.session.add(comment1)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
