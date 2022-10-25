from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    waakan = User(
        username='Waakan Music Group',first_name='Waakan', last_name="Group", email='demo@aa.io', password='password')
    production = User(
        username='128 Productions',first_name="AP", last_name="Amber", email='marnie@aa.io', password='password')
    wormhole = User(
        username='Wormhole Music Group', first_name="Dirt", last_name="Monkey", email='bobbie@aa.io', password='password')
    Philos = User(
        username='Philos Records', first_name="Philo", last_name="Beats", email='bobbie2@aa.io', password='password')

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
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
