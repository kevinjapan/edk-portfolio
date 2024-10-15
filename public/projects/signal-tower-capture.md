# Signal Tower Capture
![Delicious Demo Homepage](/imgs/stc-homepage.jpg)

## Desktop collections solution.


### overview

A volunteer project for a local museum. 

The **Signal Tower Museum** in Arbroath is housed in the original shore station of the 
**Bell Rock Lighthouse**, the world's oldest surviving sea-washed lighthouse.

#### tech stack
- Electron
- SQLite
- JavaScript
- Node.js


## the pitch

#### Problem
Like many small museums, the **Signal Tower Museum** has limited resources 
and hasn't been able to optimize access to her archive of local
information, both in hard-copy and disk-file formats.
            
The **intial brief** was to capture access to the remaining hard-copy artefacts
by scanning and saving electronic copies to a local folder archictecture,
currently employed as a primary on-site archiving system.

An opportunity was realized to address the limitations of the
current archiving system while migrating the remaining local interest
archive by providing an **application** to better facilitate access to the collection.

Given the typical **use-case** - whereby an individual contacts the museum to request for
information regarding a local interest topic, and the staff search the collection folders
for relevant on-site material - a desktop application solution was chosen.


#### Appetite
Given the voluntary and limited one-day-a-week effort spent on the project,
we limited the solution to a single, stand-alone, **desktop application** on the museum
reception's computer. 


#### Solution
The requirements for a zero-cost, performant, desktop application was met by 
adopting proven **open-source** and **public domain** software.

The **Electron JS** application framework was chosen as a means of deploying the
available web technology skillset in a desktop application. 

**SQLite** was chosen as a fully-featured file-based database solution.

Signal Tower Capture provides a **full text search** functionality and has been
tested on up to 10,000 collection item records.

The application provides **CSV import and export**, allowing for the potential
of future integrations, as well as **JSON import and export** for facilitating
human-readable transfer and manipulation of data.

The simple file-based architecture of SQLite means **database backups** and
**snapshots** can be easily taken as required.

The core **main** application is written in **Node.js**, providing a native
file server for the web-based client app.

For the **client** or **renderer** app, a **custom JavaScript** solution was chosen over
deploying a larger framework to reduce the number of moving parts and learning curves during development.

##### Links

[SignalTowerCapture on GitHub](https://github.com/kevinjapan/SignalTowerCapture)

[The Signal Tower Museum on wikipedia](https://en.wikipedia.org/wiki/Signal_Tower_Museum)
