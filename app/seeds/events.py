from app.models import db, Event
from datetime import time

def seed_events():
    event1 = Event (
        name='Demo',
        description='Demo',
        address='1234 Demo Street',
        city='Demo City',
        state='Demo State',
        zip_code='12345',
        image_url='https://i.imgur.com/4ZQZQ2m.jpg',
        website='https://www.demowebsite.com',
        start_date='2021-01-01',
        start_time=time(12, 00),
        end_date='2021-01-01',
        end_time=time(4,00),
        owner_id=1,
        refunds=True
    )

    db.session.add(event1)

    db.session.commit()

def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
