# Usage
This project uses docker, so make sure you have it installed.

Then build this container with

```docker build -t porter-app .```

Now you are able to launch the project with

```docker run -p 80:3000 -t porter-app```,

where 80 - your desired port for this app.
