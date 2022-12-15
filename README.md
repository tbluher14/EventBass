# Capstone Full Stack Project - eventBass

This is my clone of EventBrite, eventBass, created for App Academy's 24 week immersive program Capstone Project.

Live Site: https://eventbass.herokuapp.com/

<img width="1431" alt="Screen Shot 2022-10-29 at 11 03 14 AM" src="https://user-images.githubusercontent.com/97054477/198844049-9c1ff89f-8992-4369-ab12-48436fc9e0f8.png">
  

eventBass is a full-stack clone of https://www.eventbrite.com . Users can add, edit, and delete their events, add comments to other user's events, as well as edit and delete their comments. 

## Languages and Frameworks Used: 
Frontend:

![image](https://user-images.githubusercontent.com/20654267/192156837-122333b5-1337-4630-abcd-e48f538c141d.png)
![image](https://user-images.githubusercontent.com/20654267/192156876-64b1afdd-e93f-4f6b-a0ff-2d7e9b75258a.png)
![image](https://user-images.githubusercontent.com/20654267/192156881-268b4f35-02b2-4113-861b-c2ea54b6ff87.png)
![image](https://user-images.githubusercontent.com/20654267/192156890-ca8a0612-9350-4d10-88f7-cc09dd740865.png)
![image](https://user-images.githubusercontent.com/20654267/192156892-eddb0af2-29cc-46bf-9d6d-fc0ead32005b.png)
 

Backend & Hosting:

![image](https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534)
![image](https://camo.githubusercontent.com/43c40e9f61f01e780f4cfed5dafda9e3494310ba1b6ea11e20c4949e556a47c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f666c61736b2d2532333030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d666c61736b266c6f676f436f6c6f723d7768697465)
![image](https://camo.githubusercontent.com/281c069a2703e948b536500b9fd808cb4fb2496b3b66741db4013a2c89e91986/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f737467726553514c2d3331363139323f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465)
![image](https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465)
![image](https://camo.githubusercontent.com/f48e6e8822dbed2b14a693017b364d00813b7872df67d95e5844aa3cf94ec482/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c416c6368656d792d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c266c6f676f436f6c6f723d424131323132266c6162656c436f6c6f723d41443030303026636f6c6f723d413930303030)

<br>

## Site Resources: 

* [eventBass Live Link](https://eventbass.herokuapp.com/)
* [API Routes]()
* [Database Schema](https://github.com/tbluher14/EventBass/wiki/Database-Schema)
* [MVP Features](https://github.com/tbluher14/EventBass/wiki/MVP-Features)
* [React State Shape]()
* [User Stories](https://github.com/tbluher14/EventBass/wiki/User-Stories)


## Features: 
## Login or Signup as a New User: 

<img width="1417" alt="Screen Shot 2022-12-08 at 2 54 49 PM" src="https://user-images.githubusercontent.com/97054477/206575583-3e03c40a-ff02-4703-9428-c2520fa904a2.png">


- Sign up for the site with a valid email and user name and have access to all of eventBass's functionality


<img width="1430" alt="Screen Shot 2022-12-08 at 2 54 33 PM" src="https://user-images.githubusercontent.com/97054477/206575605-262b3142-f1d4-4bef-9a6a-c55aefd882a7.png">

- You can use you newly created account to log in
- Or you can log in as a demo user 

## Create/Edit/Delete An Event:  

## Create Event 
<img width="500" height="700" alt="Screen Shot 2022-10-29 at 11 09 32 AM" src="https://user-images.githubusercontent.com/97054477/198844306-881fb263-e8a7-4961-9e7f-2a3fbeea9f33.png"><img width="500" height="700" alt="Screen Shot 2022-10-29 at 11 09 41 AM" src="https://user-images.githubusercontent.com/97054477/198844316-926783cf-6abb-4144-98f7-f7399bb4c235.png">


- List your event on eventBass! Fill out the required fields and click submit to be taken to your newly created eventBass page.
- The event date fields do not allow for events in the past, illogical event timing such as event date starting before the event start date, as well as time needing to be in the future for same-day events.  

## Edit Event

<img width="500" height="700" alt="Screen Shot 2022-10-29 at 11 13 40 AM" src="https://user-images.githubusercontent.com/97054477/198844521-e6d18b66-857b-4ddd-b5a7-201bba1d055f.png"> <img width="500" height="700" alt="Screen Shot 2022-10-29 at 11 13 47 AM" src="https://user-images.githubusercontent.com/97054477/198844531-b302176e-c92d-4c52-a33c-74cd754f0789.png">

- After creating an event, the event owner can make edits to the event as things change! 

## Delete An Event

<img width="1045" alt="Screen Shot 2022-10-29 at 11 17 37 AM" src="https://user-images.githubusercontent.com/97054477/198844708-06732970-4720-4124-a116-d1cd444c776f.png">

- As the event owner, the user may delete an event 


## Create/Edit/Delete A Comment

<img width="616" alt="Screen Shot 2022-10-29 at 11 18 47 AM" src="https://user-images.githubusercontent.com/97054477/198844777-2378da26-1a3c-45ef-9ce3-0fe2136966f4.png">

## Create Comment

<img width="983" alt="Screen Shot 2022-11-07 at 8 34 14 AM" src="https://user-images.githubusercontent.com/97054477/200350271-90f83a3d-3ecf-42ac-9256-8c913eb7b751.png">

- To add a comment to an event, make sure you're logged in, and simply click "add comment" and let the organizers know how stoked you are for their event!

## Edit/Delete A Comment:

<img width="951" alt="Screen Shot 2022-11-07 at 8 36 08 AM" src="https://user-images.githubusercontent.com/97054477/200350789-9b7e079d-bbc5-443c-8092-e6471d1ae431.png">

- If you change your mind on an event and would like to change or remove your comment, no worries, just click edit or delete review! 


## Liked Events:

<img width="302" alt="Screen Shot 2022-12-08 at 2 56 17 PM" src="https://user-images.githubusercontent.com/97054477/206575847-0062fb37-c652-4cf1-a5bb-92ee63945a1f.png">


- To access your liked events, make sure you are signed in and navigate to the "My Liked Events" page from the drop down menu 

<img width="1271" alt="Screen Shot 2022-12-08 at 2 56 08 PM" src="https://user-images.githubusercontent.com/97054477/206575958-e48e9f1d-af4e-446e-8103-a2a46991d3b6.png">

- From this page you can renavigate to events you may have saved for later, or just want to show your support on! 

