# The "Coach Finder" App

## Two Features

### Find a Coach

- List all available coaches
- View coach details
- Register as a coach
- Contact a coach [0.->]

### Requests (Messages)

- Cantact a coach [0.<-]
- View incoming requests

## Planning a Vue app

1. Define Features

- Derive **Data** Models/Vuex Store Layout
  - App-wide State & Getters
  - Actions, Mutations

2. Derive **"Design" & Components**/Layout

### Data

**Coaches**

- List of _Coaches_
  _Coach_ may contain:
  - id [1.<-]
  - firstName
  - lastName
  - description
  - area of expertise
  - rate

**Requests**

- List of _Requests_
  _Request_ may contain:
  - coachId [1.->]
  - message
  - email

_**Mutations**_

**Coaches**

- register
- set coaches

**Requests**

- contact Coach
- set Requests

## Layout

**Routes**

/coaches => CoachesList
/coaches/:id => CaochDetails
/register => CoachRegistration
/contact => ContactCoach
/requests => RequestsReceived
