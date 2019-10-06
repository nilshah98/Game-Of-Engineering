<div align="center">
  <h1> Guide-Me </h1>
  <p> An attempt at making a guide for college life </p>
  <img width=300px src="./UI/assets/logo.png" alt="Guide-Me"></a>
</div>


<h3 align="center">Education based assistant</h3>

<div align="center">

  [![Gitter](https://img.shields.io/gitter/room/bri3fly/bri3fly.svg)](https://gitter.im/bri3fly/Lobby)
  [![Website cv.lbesson.qc.to](https://img.shields.io/website-up-down-green-red/http/cv.lbesson.qc.to.svg)](https://github.com/inishchith/Briefly-web/tree/master)
  [![made-with-js](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  <br>
  [![HitCount](http://hits.dwyl.io/inishchith/Briefly.svg)](http://hits.dwyl.io/inishchith/Briefly)

</div>

------------------------------------------

> Ever reassessed your decisions in your college life, Find a way to evaluate those would be's and figure out the pathway they would lead to

------------------------------------------
### Features

- `Subscriptions` for a news source
- `Bookmark` an article
- `Summarize` an source article or a url
- Browse across ~ 255 preffered source listed [here](./App/sources.csv)
- Featured Article as per all user reaction ( Also an Add-Ons )
- `Night-Mode` for better readiblity
- Subscribe to your favorite source using `chatbot` and read it on your own comfort from the `web-app`

<div align="center">

<h3 > Briefly As Web-App  </h3>
<br>
<p align="center">
<img src ="./assets/briefly-web.gif" width = 500px>
</p>

<h3><a href="https://www.facebook.com/Briefly-350014818823728/">  Briefly On Messenger   </a></h3>
<br>
<img src="./assets/sync-sub.gif" width=245px>
<img src="./assets/show-news.gif" width=245px>

</div>

------------------------------------------

### Add-Ons

- [ ] Share your resume template which reflects your achievements throughout college life
- [ ] A guide that routes you through the game
- [ ] Add More

------------------------------------------
### File Structure


#### ChatBot

- `App` : Source code for chatbot
- `Scrappers` : Scrapper for maintaining inital news distribution across web-app and chatbot using firebase . Deployment of this would result in frequent update the news

#### Web-App

- Repository [here](https://github.com/inishchith/Briefly-web/tree/master)

------------------------------------------
### Installation

* Install dependencies
```sh
        $ pip3 install -r requirements.txt
```

* Edit [config.py](https://github.com/inishchith/Briefly/blob/master/App/config.py)

* Add :fire:firebase project credentials here [1](https://github.com/inishchith/Briefly/blob/master/App/subscribe.py) [2](https://github.com/inishchith/Briefly-web/blob/master/mhack/basic_app/subscribe.py)

------------------------------------------
### Contributing

 We're are open to `enhancements` & `bug-fixes` :smile: Also do have a look [here](./CONTRIBUTING.md)

### Note

- This project was done under `24 hours with minimal pre-preparation`
- Extended capabilities of scraper to `Indian Languages` ( Hindi & Marathi supported as of now)

------------------------------------------
### Contributors

- [@nilshah98](https://github.com/nilshah98)
- [@nurdtechie98](https://github.com/nurdtechie98)
- [@nightWing1998](https://github.com/NightWing1998)
- [@parshva-b](https://github.com/parshva-b)

------------------------------------------
### Recognition

This repository / project was a part of [@KJSCEHack](https://github.com/kjsce-codecell) 2019
