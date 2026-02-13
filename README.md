## DreamClimb web application

This is the web application for DreamClimb, a project to help climbers find boulders in Fontainebleau. The application is built with Next.js and Tailwind CSS.

### Goal
The goal of this application is to provide an easy-to-use interface for climbers to explore and discover boulders in the Fontainebleau area. Users can browse through sectors, boulders, and view details about each boulder, more specifically about which category of people ascended it.

### Features
The first version of the website will be a simple sector and boulder explorer interface, with the following features:

- Filtering the data by sector, boulder, grade.
- When selecting a specific boulder, the user can see some data about its ascents:
  - Number of ascents
  - Number of ascents by gender
  - Distribution of heights of the climbers who ascended it
  - Distribution of wingspan of the climbers who ascended it
  - Count of "breakthroughs" (ascents by climbers who have never ascended a boulder of that grade before)
- A "dream boulder" feature, where users can input their height, wingspan, and gender, and get a list of boulders that are suitable for them, based on the data of the ascents.

### Future features
In the future, we plan to add a ML model to predict the probability of a user being able to ascend a boulder, based on their height, wingspan, and gender, as well as other features such as:
- Style of climbing (e.g., slab, overhang, etc.)
- Type of holds (e.g., crimps, slopers, etc.)

There will also be a user profile feature, where users can create an account and log their ascents, as well as see their climbing history and statistics. This will allow us to provide more personalized recommendations and insights to the users.

### Data Origin
Sector and boulder data was taken from the [Bleau.info](https://bleau.info/) website, containing the most complete and up to date information about the Fontainebleau areas. 
In total, we have data for 20k+ boulders and 300+ sectors. Boulders that are in closed sectors, or that are not climbable anymore are not included in the data.

Ascent data was also taken from the [Bleau.info](https://bleau.info/) website, as well as from [bettybeta.com](https://bettybeta.com). 
In total, we have data for 600k+ ascents (with users, dates, and grades), and 7k+ users. User data is highly unbalanced, with more male than female users. 

### Tech Stack
The application is built with Next.js, a React framework for server-side rendering and static site generation. Tailwind CSS is used for styling, providing a utility-first approach to design. The application is structured with a clear separation of components and pages, making it easy to navigate and maintain.

The backend was part of a Data Engineering project, and is built with Python and FastAPI. It provides a RESTful API for the frontend to fetch data about sectors, boulders, and ascents.
