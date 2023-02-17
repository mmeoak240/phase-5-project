# ALLSTUDY

## Welcome!

<img src="https://abaforlawstudents.com/wp-content/uploads/2019/11/study-group.jpg" alt="Study group">

Welcome to AllStudy, your ultimate study buddy! With AllStudy you can create notebooks for your various courses and take notes within these notebooks(obviously). You will be able to attach tabs to your notes for easy organization and hekp in finding the notes you need faster. Are you one of those people who loves to use flashcards to ingrain information into your head? Great! You can do that too by making flashcards that have a front and back with a flip function(also may be tabbed so you can study only what you need).

## Purpose

The purpose of this application is to provide an all in one study tool for students whether they be in High School, college or even in a coding bootcamp.
I have always struggled with taking and organizing my notes. I would have notes on google docs, in a note book, paper flashcards and bookmarked browser pages. This approach might work for some people but not everyone. I wanted to create a place to keep everything; notebooks, flashcards, scheduleing and more, all the tools a student needs to succeed.

## Features

- Creation of notebooks and notes within those notebooks.
- Ability to edit notes.
- Creation of flippable flashcards
- All notes and flashcards can be tabbed to organize and study only what you need.

## Comming Features

Features that will be added with future updates will be:

- Access to a dictionary and thesaurus to make sure you understand everything your reading while studying.
- Access to google calenders to keep track of classes and deadlines.
- A links page to save an organize websites you may be using.
- The ability for students to share notes.

## Install

This application was created using Ruby 2.7.4 and Rails 6.1.3.
To check your versions type the following into you console

```
ruby -v
```

```
rails -v
```

### Clone Repository

```
git clone https://github.com/mmeoak240/phase-5-project
```

### Install dependencies

```
gem install bundler
bundle install
```

### Fire up the database

```
rails db:create db:migrate
```

### Start up the frontend

```
cd client
npm start
```

### Feature breakdown

The navigation bar in top right corner has following options:

-Home (http://localhost:4000)
Returns user to the home page

---

-Notebooks  
 Brings user to their collection of notebooks(http://localhost:4000/notebooks).  
 These notebooks can be clicked to take the user to the notes they've created within the selected notebook(http://localhost:4000/:id/notes)  
 within this page you will also have access to the flashcards you've created for the selected notebook(http://localhost:4000/:id/flashcards).  
 On this page you also may edit your notes. (http://localhost:4000/notes/:id/edit)
Note attributes are Tab and Content.  
 Notebook attributes are Subject and Cover.  
 A note may not be created unless an already existing notebook is selected or the new notebook fields are filled out.

---

-Create (http://localhost:4000/notes/new)  
Takes user to a form where they may add a note to an already  
 existing notebook or create a new notebook.

---

-Add Flashcard (http://localhost:4000/flashcards/new)  
Takes user to a form where they may create a new flashcard and add it to an already existing notebook. Flashcard attributes are Tab, Front and Back.

---

-Account (http://localhost:4000/users/1/edit)  
Allows user to view and edit their account information.

---

-Logout  
Logs the user out.

## Visuals

<img src="/client/src/READmeImages/Screenshot (19).png" alt="Home page">
