

# Signal Tower Capture
![Signal Tower Capture Homepage](/imgs/stc-homepage.jpg)
#### Desktop collections solution for managing files and folders on your local machine.


Electron
JavaScript
Node.js
SQLite


https://github.com/kevinjapan/SignalTowerCapture


> Status: on-going


> Volunteer project for a small, local museum.




## the pitch

### Problem
Like many small museums, the Signal Tower Museum has limited resources 
and hasn't been able to optimize access to her archive of local and regional
information, both in hard-copy and disk-file formats.
            
The intial brief was to capture access to the remaining hard-copy artefacts
by scanning and saving electronic copies to a local folder archictecture,
currently employed as a primary on-site archiving system.


An opportunity was realized to address the limitations of the
current archiving system while migrating the remaining local interest
archive by providing an application to better facilitate access to the collection.


Given the typical use-case - whereby an individual contacts the museum to request for
information regarding a local interest topic, and the staff search the collection folder
for relevant on-site material - and the absence of finance, off-site hosting or need for
online access, a desktop application was chosen...


to do : adapt this: The best problem definition consists of a single specific story that shows why the status quo doesn’t work. This gives you a baseline to test fitness against.



### Appetite
Given the voluntary and limited one-day-a-week effort spent on the project,
we limited the application to ...  desktop, single application, files on local computer,
search for files, limited admin functionality
to provide a realistic working tool - backup database and import/export records into the database.



### Solution
Desktop, small database application
integrate with existing folder and file system
Electron JS chosen - utilize web skills of developer and provide a desktop solution
sqlite database
csv chosen for compatibility/future
json import/export to facilitate the integration of existing files
Vanilla JavaScript solution built on Electron's framework of Chromium Browser engine and Node.js runtime.

