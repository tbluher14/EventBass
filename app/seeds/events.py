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
        image_url='https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        website='https://www.demowebsite.com',
        start_date='2021-01-01',
        start_time=time(12, 00),
        end_date='2021-01-01',
        end_time=time(4,00),
        owner_id=1,
        refunds=True
    )
    event2 = Event (
        name='Demo2',
        description='Demo',
        address='1234 Demo Street',
        city='Demo City',
        state='Demo State',
        zip_code='12345',
        image_url='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        website='https://www.demowebsite.com',
        start_date='2021-01-01',
        start_time=time(12, 00),
        end_date='2021-01-01',
        end_time=time(4,00),
        owner_id=1,
        refunds=True
    )
    event3 = Event (
        name='Demo2',
        description='Demo',
        address='1234 Demo Street',
        city='Demo City',
        state='Demo State',
        zip_code='12345',
        image_url='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        website='https://www.demowebsite.com',
        start_date='2021-01-01',
        start_time=time(12, 00),
        end_date='2021-01-01',
        end_time=time(4,00),
        owner_id=1,
        refunds=True
    )
    event4 = Event (
        name='Demo2',
        description='Demo',
        address='1234 Demo Street',
        city='Demo City',
        state='Demo State',
        zip_code='12345',
        image_url='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        website='https://www.demowebsite.com',
        start_date='2021-01-01',
        start_time=time(12, 00),
        end_date='2021-01-01',
        end_time=time(4,00),
        owner_id=1,
        refunds=True
    )


    db.session.add(event1)
    db.session.add(event2)
    db.session.add(event3)
    db.session.add(event4)

    db.session.commit()

def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
