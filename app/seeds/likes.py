from app.models import db, Like


# Adds a demo user, you can add other users here if you want
def seed_likes():
    waakan = Like(
        user_id=1, event_id=1)
    production = Like(
        user_id=2, event_id=2)
    wormhole = Like(
        user_id=3, event_id=3)
    Philos = Like(
        user_id=4, event_id=4)

    db.session.add(waakan)
    db.session.add(production)
    db.session.add(wormhole)
    db.session.add(Philos)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
