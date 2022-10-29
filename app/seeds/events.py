from app.models import db, Event
from datetime import time

def seed_events():
    event = Event (
        name='SLANDER Thrive On The Rocks w/ Virtual Riot',
        description='AEG Presents is thrilled to announce SLANDER live at Red Rocks Amphitheatre on Wednesday, November 9th, 2022. ',
        venue_name="Red Rocks Amphitheatre",
        address='18300 W Alameda Pkwy',
        city='Morrison',
        state='Colorado',
        zip_code='80456',
        image_url='https://therooster.com/files/inline/images/slander_redrocks_mike-31.jpg',
        website='https://www.redrocksonline.com/events/slander-11-9-442527/',
        start_date='2022-11-09',
        start_time=time(17, 00),
        end_date='2022-11-10',
        end_time=time(1,00),
        owner_id=3,
        refunds=True
    )
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
        image_url='https://images.squarespace-cdn.com/content/v1/5e5c72d426341f1a10215614/1583551329667-9MUCSXP4ONQ0OXPKR5KY/TameImpalaMissionBallroom2019-01.jpg',
        website='https://dukedumont.com',
        start_date='2022-11-26',
        start_time=time(20, 00),
        end_date='2022-11-27',
        end_time=time(2,00),
        owner_id=2,
        refunds=False
    )
    buku = Event(
        name='WAKAAN Presents: Dual Continuum Tour w/ Buku & G-Rex',
        venue_name='Ogden Theater',
        description="From the track record of Robert Balotsky's work as Buku, it’s clear that the Pittsburgh native and graduate of Music Technology is a well-equipped architect of twisted, layered soundscapes. With a menacing grasp on sound design and music theory, Buku combines deceptively simple and emotive melodies, laden with resounding low-end and intricate drum patterns. With a love of drums rooted early in his childhood, his work reflects his passion for percussion laced with elements only a trained ear could produce.",
        address='935 E Colfax Ave',
        city='Denver',
        state='Colorado',
        zip_code='80218',
        image_url='https://www.gratefulweb.com/sites/default/files/inline-images/DSC07791.jpg',
        website='https://www.ogdentheatre.com/events/detail/448775',
        start_date='2022-12-10',
        start_time=time(20, 00),
        end_date='2022-12-11',
        end_time=time(2,00),
        owner_id=1,
        refunds=False
    )
    boombox = Event (
        name='Boombox Featuring Backbeat Brass',
        venue_name='Ogden Theater',
        description="A little house, a little blues, a little funk, a little rock, and a whole lot of soul blast through BoomBox. Since first emerging in 2004, founder, songwriter, producer, and multi-instrumentalist Zion Rock Godchaux has been quietly seasoning and simmering this recipe to perfection. At the same time, the Muscle Shoals, AL native stays true to what attracted countless fans in the first place.",
        address='935 E Colfax Ave',
        city='Denver',
        state='Colorado',
        zip_code='80218',
        image_url='https://edm.com/.image/t_share/MTUyOTU2NzQ2MDExMjU1ODE1/markusschulz-laser-lightshow.jpg',
        website='https://www.ogdentheatre.com/events/detail/443067',
        start_date='2022-12-31',
        start_time=time(20, 00),
        end_date='2023-01-01',
        end_time=time(2,00),
        owner_id=3,
        refunds=False
    )
    event3 = Event (
        name='dirt monkey w/ Space Wizard & Kilamanzego & Green Matter',
        venue_name='Mission Ballroom',
        description='Based out of Boulder, Patrick Dirt Monkey Megeath has been producing for nearly 10 years, starting with hip-hop and breaks before recently trying his hand at dubstep. With a keen ear for bass and a vast knowledge of music production, he has quickly exploded onto the scene with his innovative original productions and energetic stage presence.',
        address='4242 Wynkoop Street',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url='https://static.pollstar.com/wp-content/uploads/2022/01/51209eba-448b-4bb6-9b6e-ab5ccc33604c-Float_Fest_2018_-_credit_Rick_Kern-scaled.jpg',
        website='https://www.axs.com/artists/113296/dirt-monkey-tickets?s_kwcid=AL!7852!3!556358162040!!!g!!&cpch=SEM&cpdate=20211026&cpsrc=google&cpcn=axs-rbl-denverboulder-sem-paid&intoff=true&cpid=15086805545&utm_term=&utm_source=google&utm_medium=SEM&utm_campaign=axs-rbl-denverboulder-sem-paid&gclid=Cj0KCQjwnvOaBhDTARIsAJf8eVM9M-7VF3LVUGhUU1-H3spFllHKWqyLHAB4qGmBijipugVTocIrlAQaAk0rEALw_wcB',
        start_date='2023-01-21',
        start_time=time(20, 00),
        end_date='2023-01-22',
        end_time=time(2,00),
        owner_id=3,
        refunds=False
    )

    sodown = Event (
        name='SoDown Presents Worlds Beyond Tour w/ KillBill + Jaenga',
        venue_name='Mission Ballroom',
        description='Ehren River Wright, aka SoDown, is a staple in the Colorado music scene. His first headline show was a huge success, selling out before doors. Thanks to a passionate fanbase, Ehren has quickly taken his music to a national stage, playing many festivals across the US. A SoDown set is not one to miss. Featuring live saxophone, Ehren takes the crowd on an intimate sensory adventure through space and time. His latest tracks include a wide array of musical talents, including his keen ear for sound design and production as well as his never ending dedication to organic instrumentation. Combining infinite influences, Ehren describes his music as an endlessly evolving medley of many different genres, culminating in a uniquely diverse style of bass music. 2018 has much promise, as SoDown continues to prove himself as one of the most dedicated and innovative acts in the game.',
        address='4242 Wynkoop Street',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url='https://sodown.com/wp-content/themes/SoDown/img/fb.png?v=4',
        website='https://sodown.com',
        start_date='2023-02-03',
        start_time=time(20, 00),
        end_date='2023-02-04',
        end_time=time(2,00),
        owner_id=3,
        refunds=False
    )
    ofthetrees = Event(
        name='Of The Trees Presents Codex Natura w/ SuperTask',
        venue_name='Mission Ballroom',
        description='Of The Trees is an electronic music producer hailing from Portland, ME. Melding strong influences from hip hop, ambient, and dance music to create emotive soundscapes ranging from heavy deep bass anthems to jazzy piano arrangements and downtempo. With cosigners ranging from Bassnectar to Liquid Stranger, Of The Trees has solidified himself in the North American underground bass music scene as an innovative and dynamic producer.',
        address='4242 Wynkoop Street',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url='https://electronic.vegas/wp-content/uploads/sites/4/2021/05/emw-twitter-header.jpg',
        website='https://www.missionballroom.com/event/449742-mission-ballroom-denver-tickets',
        start_date='2023-03-10',
        start_time=time(20, 00),
        end_date='2023-03-11',
        end_time=time(2,00),
        owner_id=1,
        refunds=False
    )
    event4= Event(
        name='Dom Dolla w/ CJ + Shady Jones + Thatz Hot',
        description='AEG Presents are thrilled to announce DOM DOLLA live at Red Rocks Amphitheatre Saturday, April 1st, 2023. ',
        venue_name="Red Rocks Amphitheatre",
        address='18300 W Alameda Pkwy',
        city='Morrison',
        state='Colorado',
        zip_code='80456',
        image_url='https://assets.redrocksonline.com/wp-content/uploads/2021/12/06124302/dom-dolla-tickets_04-24-22_86_61aa73a3340e0.jpg',
        website='https://www.redrocksonline.com/events/dom-dolla-451792/',
        start_date='2023-04-01',
        start_time=time(17, 00),
        end_date='2023-04-02',
        end_time=time(1,00),
        owner_id=2,
        refunds=True
    )
    event5 = Event (
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
        refunds=False
    )

    griz = Event(
        name='GRiZ Presents: Free Shows For The People',
        description='Grant is back at it again - this time performing a free show for the people of Denver at The Ogden Theater on Colfax Ave. This event is guarenteed to be a barn burner - get to the venue early to secure you spot! ',
        venue_name = "The Ogden Theater",
        address='935 E Colfax Ave',
        city='Denver',
        state='Colorado',
        zip_code='80218',
        image_url='https://www.youredm.com/wp-content/uploads/2017/03/Griz_okeechobee_Collin-Taylor.jpeg',
        website='https://www.mynameisgriz.com/',
        start_date='2023-05-01',
        start_time=time(20, 00),
        end_date='2023-05-02',
        end_time=time(2,00),
        owner_id=1,
        refunds=False
    )

    db.session.add(event)
    db.session.add(event1)
    db.session.add(event2)
    db.session.add(buku)
    db.session.add(event3)
    db.session.add(sodown)
    db.session.add(ofthetrees)
    db.session.add(event4)
    db.session.add(event5)
    db.session.add(griz)


    db.session.commit()

def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
