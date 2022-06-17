# 💡 Week 5 - Redux assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select Open Preview)

### Rules for this challenge

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this challenge public in any ways

---

### Second opinion

- As per Codaisseur/NRTO rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com

---

### Duration

- This challenge will end at 16.00h.

---

### Passing grade

This challenge is graded in red, yellow or green. Meaning of each grade:

- 📕 Red: you haven't completed all required features. `Fail grade`.

- 📒 Yellow: you've completed all required features. `Pass grade`.

- 📗 Green: you've completed all required features and at least one bonus feature. `Pass with honor grade`.

🚨 **If you've completed all required features, but they are not fully functional, you might still downgrade to a red.**

#### Results feedback

Correcting this assessments takes time. Please be patient with regards to getting the results of your assessments. Results will go out the following week between Monday and Tuesday.

#### How to make and submit your work

- Use `npx create-react-app` to create a new react app
- Add this briefing to your repo as `BRIEFING.md`
- `create-react-app` will initialize a git repository for you, so don't make one yourself
- Go to `github.com` and
  - create a new `private` repository
  - make sure **NOT** to initalize with a readme/.gitignore as it will give you errors when you will try to push
  - Add the evaluator to your repository as a `collaborator` (karlaevelize, swendude, David-L-R and matiasgarcia91)
- Add your newly created git repository as a remote to your react app
- Push the initial version of your app created by `create-react-app`
- Start your react app with `npm run start`, as usual, and start programming.

### Self assessment

- After you finish the challenge, go and fill up this form:

👉 [Redux Challenge Form](https://forms.gle/tu8j6iRM2EV8GZHdA)


### What to expect after submitting this challenge?

- If you scored a red, a teacher will contact you for a conversation
- In case you scored yellow or green, you don't have to expect a conversation, but feel free to reach out to a teacher if you have questions

## Learning goals

For transparency and clarity, these are the learning goals we will be testing:

- Installing and setting up Redux in a React app
- Creating & managing state using redux stores
- Writing update logic in reducers
- Writing actions and actions creators, including thunks for asynchronous actions
- Creating & using selectors to get information from the store
- Using npm to install packages and run scripts
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things.

Don't hesitate to use the Reader & Google (Stackoverflow).

## Tips

- **Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.
- **Don't get stuck for too long!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.
- **Focus on the required features first!** Before moving to the bonus sections of this assessment, focus on implementing the mandatory parts, then move on to the next ones.

## What are we building?

The goal of this challenge is to create a dashboard that controls a 'smart house' (a house where most electronics are controlled from a single point).
The house has the following technology:

- 4 smart lamps 💡
- a smart radio 📻
- smart thermostat 🌡️

The state of the house is represented by a javascript object, a new house start out like this:

```js
const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genre: "classic rock", power: false },
  thermostat: 20,
};
```

> Tip 1: use the above example for your initial state in the reducer, there's no need to create extra slices

This represents the state of the house where all 4 lamps are turned off, the radio is turned off (but is set to play 'classic rock' once it is turned on) and the thermostat is set to 20 degrees.

You can use the following wireframes as an inspiration:
**don't worry about the looks of your app, we will not take it into account when grading you!**

- <a href="https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/04uE52Jw/e6c7db90-4895-4df3-bce8-6be105b22db3.jpg?v=10bd577dd1c8f826024002e6e0650a03?v=10bd577dd1c8f826024002e6e0650a03">wireframe 1</a>
- <a href="https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/kpuJ6DAj/c976a973-55b5-4383-a33d-8fde9038af05.jpg?v=e36fdf3a7144dd1ff676c187ff99db16?v=e36fdf3a7144dd1ff676c187ff99db16">wireframe 2</a>

---

## Required Features - 🖥️ Building an interface

### ❗ Feature 1 - Lamp control (Required)

- Create an interface that can turn each of the lamps on and off
- Note! the state of the lamps has to be managed by Redux

> Tip 1: Have a look at the `update score of a player` exercise. You'll find it on React day 3

> Tip 2: You don't need to write all the logic in a toggle button, you can use two buttons: on & off

### ❗ Feature 2 - Radio control (Required)

- Add to the interface the possibility to turn the radio on and off, also add a field to change the genre the radio will play (which is just a string)
- Note: the state of the radio has to be managed by Redux

### ❗ Feature 3 - Thermostat control (Required)

Add the functionality to change the thermostat setting

> Tip 1: You don't need to use a slider here, feel free to just get the number from a standard form/input.

---

## Bonus Features - 🔌 Power management

The next part of this assessement is about power management.

Our smart house is able to provide 100 PU (Power units) which powers the different devices in the house.

The power consumption of the devices can be found in the following table:

| Device     | PU consumption            |
| ---------- | ------------------------- |
| Lamp       | 25                        |
| Radio      | 25 (independent of genre) |
| Thermostat | 10 per degree above 20    |

Examples:
=======
- If you turn on 4 lamps the PU consumption will be `4 * 25 = 100 PU`. This is equal to the limit of the house so no other device can be turned on.
- Setting the thermostat to 25 degrees consumes 50 PU's (`5 * 10` => 10 for each one of the 5 degrees over 20).

### ➕ Bonus 1 - Show Power Consumption

Show the total PU consumption of the house in the interface

**Hint: You should make a function that takes the state of the house as an argument and returns the total power consumption, use that in your selector to get this number in your components!**

### ➕ Bonus 2 - Environment Friendly

When a user turns off all lamps, switch the radio off and set the thermostat to 20. Once all lamps are turned off a user should be able to turn on all devices.

**Hint: Think about this a real life scenario. A user leaves the house, and when they walk close all the lights, the smart house knows to turn off all other devices.**

### ➕ Bonus 3 - Restrict Power Consumption

Prevent the PU consumption to go above 100, a user should not be able to create a situation where there's too much PU consumption.

### 🥷 Bonus 4 - Storing The State

Retrieve and store the house from an API, make sure it loads the house after logging in. Storing the house should happen on a button click.

We already created this API for you, it an be found here: https://redux-assessement.herokuapp.com/

There are 4 endpoints that are relevant:

- POST `/auth/signup`, accepts an object in the request body like:

  ```json
  {
    "username": "swen",
    "password": "123"
  }
  ```

  and returns a response with status code 200 confirming the creation of a new account.

  Example using HTTPie:

  ```bash
  http POST https://redux-assessement.herokuapp.com/auth/signup username=aname password=123
  ```

- POST `/auth/login`, accepts an object in the request body like:

  ```json
  {
    "username": "swen",
    "password": "123"
  }
  ```

  and responds with a JWT token (if the credentials are valid)

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCS6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0NTA5NTgzNywGZXhwIjoxNjQ1MTE3NDM3fQ.27oBtXzAUcgRZSsQ0O5DG6n4Fvjmgvogc5WBoD8EZjU"
  }
  ```

  Example using HTTPie:

  ```bash
  http POST https://redux-assessement.herokuapp.com/auth/login username=aname password=123
  ```

- GET `/house` with a valid token in the Authorization header returns the house of this user like this:

  ```json
  {
    "lamps": [
      {
        "power": false,
        "id": 1
      },
      {
        "power": false,
        "id": 2
      },
      {
        "power": true,
        "id": 3
      },
      {
        "power": true,
        "id": 4
      }
    ],
    "radio": {
      "genre": "Hard rock",
      "power": false
    },
    "thermostat": 30
  }
  ```

  Example using HTTPie:

  ```bash
  http GET https://redux-assessement.herokuapp.com/house Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCS6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0NTA5NTgzNywGZXhwIjoxNjQ1MTE3NDM3fQ.27oBtXzAUcgRZSsQ0O5DG6n4Fvjmgvogc5WBoD8EZjU'
  ```

- PUT `/house` with a valid token in the Authorization header updates the state of the house. Send it a **COMPLETE** house like this (_NOTE: don't modify the id's of the lamps_):

  ```json
  {
    "lamps": [
      {
        "power": false,
        "id": 1
      },
      {
        "power": true,
        "id": 2
      },
      {
        "power": false,
        "id": 3
      },
      {
        "power": true,
        "id": 4
      }
    ],
    "radio": {
      "genre": "Hard rock",
      "power": false
    },
    "thermostat": 30
  }
  ```

  And it returns the resulting house!

  Example using axios (This is a very complex object so using HTTPie to test this is not nice):

  ```js
  const axios = require("axios");

  const house = {
    lamps: [
      {
        power: true,
        id: 1,
      },
      {
        power: true,
        id: 2,
      },
      {
        power: true,
        id: 3,
      },
      {
        power: true,
        id: 4,
      },
    ],
    radio: {
      genre: "Hard rock",
      power: false,
    },
    thermostat: 30,
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY0NTEwODM2OCwiZXhwIjoxNjQ1MTI5OTY4fQ.YieHPrsZI1woFuOfvC0LTm91BrxvD7sdd6nD15671uE";

  async function putHouse(house, token) {
    const response = await axios.put(
      "https://redux-assessement.herokuapp.com/house",
      house,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const new_house = response.data;
    console.log(new_house); // it responds with the new house!
  }

  putHouse(house, token);
  ```
