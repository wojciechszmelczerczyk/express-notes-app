# Notes App

## Project description

The project target is helping hearing impaired students during the lessons they attend. But potentially can be used by any student.

The project aims to introduce a speech to text system able to transcript the voice of the professor into a text on the screen of the student pc or mobile phone.

Student can record teacher voice by clicking a button which will transcrypt voice to text for their better understandment.

Registered user will have premium feature to store the transcriptions online and save them to a file (txt or pdf format).

Student will be able to change speech language.

Students will be able to search lessons by title they provide before transcryption to text.

Server side of application will be made in `Node` using `Express` framework.

Data will be saved to `Mongo` database.

Client side will be created in `React` using `Javascript` language.

<br/>

## Table of content

- [Techstack](#techstack)
- [Requirements](#requirements)
- [Usage](#usage)
  - [Clone repository](#clone-repository)
  - [Install dependencies](#install-dependencies)
  - [Run app](#run-app)
- [Architectures](#architectures)

  - [App Architecture](#app-architecture)
  - [Database Architecture](#database-architecture)

- [App flow](#app-flow)
- [Client routing](#client-routing)
- [API Endpoints](#api-endpoints)
- [Tests](#tests)

## Techstack

- `React.js`
- `JavaScript`
- `Express.js`
- `MongoDB`
- `Mongoose`
- `Jest`
- `Supertest`

## Requirements

- install `node`
- install `mongo`

## Usage

### Clone repository

```
git clone https://github.com/wojciechszmelczerczyk/express-notes-app.git
```

### Navigate to project folder

```sh
cd /express-notes-app
```

### Install dependencies

```
npm i
```

### Run app

<br/>

#### Run React server

```
npm start
```

#### Run Express REST API

```sh
# navigate to folder with express api
cd /server

# run app with node cli (nodemon recommended)
node index.js
```

### Env setup

```dockerfile
# Uri to mongo database
DB_URI=

# Speech key for Microsoft Cognitive Services
SPEECH_KEY=

# Speech region for Microsoft Cognitive Services
SPEECH_REGION=

# Token for test purposes
JWT=

# Token secret
JWT_SECRET=

# Token expiration time
JWT_EXPIRATION=
```

## Architectures

### App Architecture

[![](https://mermaid.ink/img/pako:eNptkLFqw0AMhl9FaHIgfgEPBdvXoUOhtIUutyg-JT4S37l3uiHEefeqJB5SqkXi14d-SRccomNs8JBoHuHT2AAabdWfPAeBL95toK6fYEn8XTjLAl31rhnat5fNDe5WIM8xZF6gfdAPLJBn5mGsj3xeoK9e_ZBijvt_hqhHUsZUhoR2lPne7lcPKSk8jOtugPmzhMo24BYnThN5pxdefkGLMvLEFhstHaWjRRuuypXZkfCz8xITNns6Zd4iFYkf5zBgI6nwChlP-q3pTl1_AC3UZ08)](https://mermaid.live/edit#pako:eNptkLFqw0AMhl9FaHIgfgEPBdvXoUOhtIUutyg-JT4S37l3uiHEefeqJB5SqkXi14d-SRccomNs8JBoHuHT2AAabdWfPAeBL95toK6fYEn8XTjLAl31rhnat5fNDe5WIM8xZF6gfdAPLJBn5mGsj3xeoK9e_ZBijvt_hqhHUsZUhoR2lPne7lcPKSk8jOtugPmzhMo24BYnThN5pxdefkGLMvLEFhstHaWjRRuuypXZkfCz8xITNns6Zd4iFYkf5zBgI6nwChlP-q3pTl1_AC3UZ08)

### Database Architecture

[![](https://mermaid.ink/img/pako:eNpNzjEOwjAMBdCrWJ6rHiAzWalEYctiNS6NIAlykwElvTsBFYSnL_2nLxecomVUyHJwdBXyJsDvLqM-Qa19Xwsch7MGBQutb_GvALBDz-LJ2bZUPj2mhT0bVC1akptBE7bm8sNSYm1dioJqpvvKHVJOcXyGCVWSzF-0P7Sr7QWbhjTi)](https://mermaid.live/edit#pako:eNpNzjEOwjAMBdCrWJ6rHiAzWalEYctiNS6NIAlykwElvTsBFYSnL_2nLxecomVUyHJwdBXyJsDvLqM-Qa19Xwsch7MGBQutb_GvALBDz-LJ2bZUPj2mhT0bVC1akptBE7bm8sNSYm1dioJqpvvKHVJOcXyGCVWSzF-0P7Sr7QWbhjTi)

## App flow

[![](https://mermaid.ink/img/pako:eNpVks9uwjAMxl_FyolJ8AI9bALa8ee63SgHq_FKBE0q1zChlnefSwp0vaT5_LNjf0lrimDJJKZkrA_wneYe9JvvmErXCDHUWNIeZrP3ruZwcZagYLLkxeGp6WDRIv-ToAjMVMjHLZZa9LmwmVypeRsr24kPg7C9C53wFZ7HYonOdzCPxCYSHi-uRCGQAJXG7811sNw9N_vILyOvbfW0p1_wQZRMd_0K4uREYz6NfEMCL6CDLOIjMBtAQRZtVme1zpdD9c_WNTG_wQvZhwOf95zVyIGorF8OrGJZddH13vXzndQHHS3G1zF-JKpHpwY1KMu9mZqKWC2weo9tn5AbOVBFuUn01yIfc5P7m3Ln2qohmXUS2CQ_el00NXiW8HX1hUmEz_SAUof6JqqBuv0B3yOyKw)](https://mermaid.live/edit#pako:eNpVks9uwjAMxl_FyolJ8AI9bALa8ee63SgHq_FKBE0q1zChlnefSwp0vaT5_LNjf0lrimDJJKZkrA_wneYe9JvvmErXCDHUWNIeZrP3ruZwcZagYLLkxeGp6WDRIv-ToAjMVMjHLZZa9LmwmVypeRsr24kPg7C9C53wFZ7HYonOdzCPxCYSHi-uRCGQAJXG7811sNw9N_vILyOvbfW0p1_wQZRMd_0K4uREYz6NfEMCL6CDLOIjMBtAQRZtVme1zpdD9c_WNTG_wQvZhwOf95zVyIGorF8OrGJZddH13vXzndQHHS3G1zF-JKpHpwY1KMu9mZqKWC2weo9tn5AbOVBFuUn01yIfc5P7m3Ln2qohmXUS2CQ_el00NXiW8HX1hUmEz_SAUof6JqqBuv0B3yOyKw)

## Client routing

| Endpoint      | Authenticated |      Component       | Describtion                    |
| :------------ | :-----------: | :------------------: | ------------------------------ |
| `/`           |      \*       |  NoteListComponent   | Note list of current auth user |
| `/register`   |       -       |  RegisterComponent   | Register form                  |
| `/login`      |       -       |    LoginComponent    | Login form                     |
| `/note/:id`   |      \*       | NoteDetailsComponent | Single note details            |
| `/createNote` |      \*       | CreateNoteComponent  | Set note title                 |
| `/saveNote`   |      \*       |  SaveNoteComponent   | Speech-to-text component       |

## API Endpoints

### User:

| Endpoint             | Method | Authenticated | Action                                        |
| :------------------- | :----: | :-----------: | :-------------------------------------------- |
| `/user`              |  GET   |      \*       | Returns current user data                     |
| `/user`              |  POST  |       -       | Creates a new user                            |
| `/user`              | DELETE |      \*       | Logout user, delete access token              |
| `/user`              |  PUT   |      \*       | Update current user                           |
| `/user/authenticate` |  POST  |       -       | Authenticate the user, returning access token |

### Note:

| Endpoint     | Method | Authenticated | Action                                    |
| :----------- | :----: | :-----------: | :---------------------------------------- |
| `/note`      |  GET   |      \*       | Get all notes of current auth user        |
| `/note`      |  POST  |      \*       | Create a note                             |
| `/note/save` |  POST  |      \*       | Fill note content via speech-to-text api  |
| `/note/:id`  |  GET   |      \*       | Get single note if owned by the auth user |
| `/note/:id`  |  PUT   |      \*       | Update note                               |
| `/note/:id`  | DELETE |      \*       | Delete note                               |

### Speech-to-text:

| Endpoint                | Method | Authenticated | Action                           |
| :---------------------- | :----: | :-----------: | :------------------------------- |
| `/api/get-speech-token` |  GET   |      \*       | Get speech token data and region |

## Tests

### Backend API

### Note

`GET /note`

```javascript
describe("GET /note", () => {
  test("when jwt doesn't exists", async () => {
    const notes = await request(app).get("/note");

    expect(notes.status).toEqual(401);
    expect(notes.body.jwt_error).toEqual("Jwt doesn't exists");
  });

  test("when jwt is incorrect", async () => {
    const notes = await request(app).get("/note").set("Cookie", "jwt=ssss;");

    expect(notes.status).toEqual(401);
    expect(notes.body.jwt_error).toEqual("Jwt is not valid");
  });

  test("when jwt is correct", async () => {
    const notes = await request(app).get("/note").set("Cookie", `jwt=${jwt};`);

    expect(notes.body).toBeTruthy();
    expect(notes.status).toEqual(200);
  });
});
```

### User

`POST /user`

```javascript
describe("POST /user", () => {
  test("when credentials are correct", async () => {
    let user = {
      email: "testuser@gmail.com",
      password: "testpassword123",
    };

    const newUser = await request(app).post("/user").send(user);

    expect(newUser.body.email).toEqual(user.email);
    expect(newUser.status).toEqual(200);
  });

  test("when credentials are incorrect", async () => {
    let user = {
      email: "testuser",
      password: "test",
    };

    const newUser = await request(app).post("/user").send(user);

    expect(newUser.body.errors).toBeTruthy();
    expect(newUser.status).toEqual(400);
  });
});
```

`POST /user/authenticate`

```javascript
describe("POST /user/authenticate", () => {
  test("when credentials are correct", async () => {
    let user = {
      email: "testuser@gmail.com",
      password: "testpassword123",
    };

    const newUser = await request(app).post("/user/authenticate").send(user);

    expect(newUser.body.token).toBeTruthy();
    expect(newUser.status).toEqual(201);
  });

  test("when credentials don't match user in db", async () => {
    let user = {
      email: "testuser",
      password: "test",
    };

    const newUser = await request(app).post("/user/authenticate").send(user);

    expect(newUser.body.error).toBeTruthy();
    expect(newUser.status).toEqual(400);
  });

  test("when credentials are incorrect", async () => {
    let user = {
      email: "testuser2@gmail.com",
      password: "test1234",
    };

    const newUser = await request(app).post("/user/authenticate").send(user);

    expect(newUser.body.error).toBeTruthy();
    expect(newUser.status).toEqual(400);
  });
});
```

### To run tests:

`npm run api-test`
