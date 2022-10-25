from app.models import db, Event
from datetime import time

def seed_events():
    event1 = Event (
        name='Liquid Stranger',
        description='In an ever-evolving universe, the art of maintaining complete and total fluidity is the most necessary key for survival. Renowned for his metamorphic capabilities and expertly crafted sonic adventures, Liquid Stranger has mastered his ability to slip in and out of genres all while honing his own personal style. Liquid Stranger has earned his reputation for exuding incommensurable talent and taking audiences on a soul-stirring aural journey of genre-bending beats on the dance floor.',
        venue_name='Mission Ballroom',
        address='4242 Wynkoop St',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url='https://freshmusicfreaks.com/wp-content/uploads/2019/11/martin.jpg',
        website='https://liquidstranger.com/',
        start_date='2022-11-17',
        start_time=time(21, 00),
        end_date='2022-11-18',
        end_time=time(2,00),
        owner_id=1,
        refunds=False
    )
    event2 = Event (
        name='Duke Dumont',
        description='A dynamo whose has produced a stunning back catalogue that includes international chart No.1 hits , Multi Grammy nominations and bumpin’ Chicago-influenced underground productions, Duke Dumont is a contemporary electronic music powerhouse. Deeply committed to creating high quality music imbued with emotional depth,  Dumont is versatile, extremely adept and hard working.',
        venue_name='Mission Ballroom',
        address='4242 Wynkoop Street',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url='https://www.youredm.com/wp-content/uploads/2016/09/duke-dumont.jpg',
        website='https:/dukedumont.com',
        start_date='2022-11-26',
        start_time=time(20, 00),
        end_date='2022-11-27',
        end_time=time(2,00),
        owner_id=2,
        refunds=True
    )
    event3 = Event (
        name='dirtmonkey w/ Space Wizard & Kilamanzego & Green Matter',
        venue_name='Mission Ballroom',
        description='Based out of Boulder, Patrick Dirt Monkey Megeath has been producing for nearly 10 years, starting with hip-hop and breaks before recently trying his hand at dubstep. With a keen ear for bass and a vast knowledge of music production, he has quickly exploded onto the scene with his innovative original productions and energetic stage presence.',
        address='4242 Wynkoop Street',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url='https://cdn.relentlessbeats.com/wp-content/uploads/2018/10/dirt-monkey-aura-181124-042-1-1200x800.jpg',
        website='https://www.dirtmonkey.com',
        start_date='2023-01-21',
        start_time=time(20, 00),
        end_date='2023-01-22',
        end_time=time(2,00),
        owner_id=3,
        refunds=True
    )
    event4 = Event (
        name='Mersiv Rocks w/ Daily Bread & Astrolizard & Smoakland & Honeycomb',
        description='AEG Presents are thrilled to announce MERSIV live with Daily Bread, Astrolizard (debut), Smoakland present Liquid Smoak, and Honeycomb at Red Rocks Amphitheatre Thursday, April 6th, 2023. ',
        venue_name="Red Rocks Amphitheatre",
        address='18300 W Alameda Pkwy',
        city='Morrison',
        state='Colorado',
        zip_code='80456',
        image_url='https://i0.wp.com/hearditherefirst.blog/wp-content/uploads/2021/05/DSC_1262-e1621343593178.jpg?fit=1920%2C1094&ssl=1',
        website='https://www.axs.com/events/453320/mersiv-tickets',
        start_date='2023-04-06',
        start_time=time(17, 00),
        end_date='2023-04-07',
        end_time=time(1,00),
        owner_id=4,
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
