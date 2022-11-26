# Welcome to Soundbits!
Here are some notes to get you started:

## Installation
You are on Windows if you are on the team right now, most likely, so that's the installation process that is documented.

### Run your code
```ps
...\soundbits> py py manage.py runserver
```

### Install Django
*First, ensure you have python downloaded
*You then need to ensure that python is added to your PATH.
*Search "env" in windows search and select "Edit the system environment variables"
*Select "Environment Variables..." at the bottom right of the screen `DANGER: YOU NEED TO PAY ATTENTION HERE, BAD THINGS CAN HAPPEN`
*Under "User variables for **username**, select "Path," then "Edit"
*Select "New," then paste the following: `C:\Users\**user**\AppData\Local\Programs\Python\Python310\Scripts`, then select "OK"
*Next, run the following commands in cmd or powershell:

```ps
...\soundbits> py -m pip install --upgrade pip
...\soundbits> py -m pip install Django
```