from app.models import db, Event
from datetime import time

def seed_events():

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
        owner_id=4,
        refunds=True
    )
    ott = Event (
        name='Ott w/ Mark Farina',
        description='Ott is a Canadian electronic musician, composer, and producer. He is known for his unique blend of electronic music, jazz, and world music. He has released over 20 albums and EPs, and has collaborated with a number of artists, including Mike Patton, Amon Tobin, and Mike Oldfield. He has also produced music for film and television, including the soundtrack for the 2007 film The Fountain.',
        venue_name="Mission Ballroom",
        address='4242 Wynkoop Street',
        city='Denver',
        state='Colorado',
        zip_code='80216',
        image_url="https://www.party-guru.com/wp-content/uploads/2022/11/LS-Liquid-Stranger-Mission-Ballroom-11-18-22__-3-of-25-scaled.jpg",
        website='https://www.missionballroom.com/event/451224-mission-ballroom-denver-tickets',
        start_date='2023-04-04',
        start_time=time(18, 00),
        end_date='2023-04-05',
        end_time=time(2,00),
        owner_id=3,
        refunds=False

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
    subtronics = Event (
        name='Subtronics w/ Space Jesus & G Jones & Ganz',
        description='AEG Presents are thrilled to announce SUBTRONICS live at Red Rocks Amphitheatre Saturday, April 8th, 2023. ',
        venue_name="Red Rocks Amphitheatre",
        address='18300 W Alameda Pkwy',
        city='Morrison',
        state='Colorado',
        zip_code='80456',
        image_url='https://consciouselectronic.com/wp-content/uploads/2020/05/subtronics-wakaan.jpg',
        website='https://www.redrocksonline.com/events/subtronics-454486/',
        start_date='2023-04-13',
        start_time=time(17, 00),
        end_date='2023-04-14',
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

    event6 = Event (
        name='The Disco Biscuits w/ The Floozies & The Main Squeeze',
        description='AEG Presents are thrilled to announce THE DISCO BISCUITS live at Red Rocks Amphitheatre Saturday, May 6th, 2023. ',
        venue_name="Red Rocks Amphitheatre",
        address='18300 W Alameda Pkwy',
        city='Morrison',
        state='Colorado',
        zip_code='80456',
        image_url="https://media.cntraveler.com/photos/5d9511fd6168d9000af15d12/16:9/w_2560,c_limit/redrocksampitheater-denver-2019-GettyImages-695093358.jpg",
        website='https://www.redrocksonline.com/events/the-disco-biscuits-1/',
        start_date='2023-05-06',
        start_time=time(17, 00),
        end_date='2023-05-07',
        end_time=time(1,00),
        owner_id=4,
        refunds=False
    )


    db.session.add(buku)
    db.session.add(event3)
    db.session.add(sodown)
    db.session.add(ofthetrees)
    db.session.add(event4)
    db.session.add(ott)
    db.session.add(event5)
    db.session.add(subtronics)
    db.session.add(griz)
    db.session.add(event6)


    db.session.commit()

def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
