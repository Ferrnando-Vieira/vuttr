# VUTTR - Very Useful Tools To Remember

VUTTR is a ReactJS web system for the ones who want to save informations about useful tools that speed up de work or simplify the daily routine. In this system, you can add, search or remove a tool.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation

The steps below will help you to install and configure VUTTR correctly.

- First of all, clone/download this repository.

- Download and install the json-server.

> yarn global add json-server

- We must execute the fake-api on the port 3000. To do so, you will need be inside de project folder and type the following comand.:

> json-server db.json

- Now, install the dependencies.:

> yarn install

- It will install all the dependencies used by the system. After the installation is complete, start the project:

> yarn start

- A message asking if you want to run in another port may appear, in this case, type "Y" and confirm. A link may me shown on the console (possibly http://localhost:3001). Copy and paste it in your browser to access the VUTTR page.

## Usage

#### Adding

To add a new tool, press the "Add" button and a modal with a form will appear.

- To save the tool, click in the button "Add Tool".
- To close the modal without saving anything, click outside.

#### Searching

You have two options of search.:

- Search in the entire list (default).: You will find every tool who have any word that matches the ones you just typed.
- Search in tags only.: When this options is checked, you will match the search only by the tool tags.

#### Removing

To remove a tool, click in the "Remove" option of the tool. A modal will be open and you can:

- Confirm the exclusion clicking in "Yes, Remove"
- Cancel the exclusion clicking in "Cancel"

## Tools used in this project

- axios: Used to make HTTP requests to API.
- prop-types: Make a runtime verification of the props received by the component to run properly.
- react-highlight-words: Used to highlight the matching word when you search.
- react-modal: Tool used to create the modals in a simple way.
- react-redux and redux: Used to store the state globaly and improve the flow of data.
- react-toastify: Used to show notifications for the user.
- redux-saga: Used to make asynchronous calls to API.

There was used too some tools to help in the development, they are:

- editorconfig: Used to have a pattern on the code even between different devs.
- reactotron: Helps to see the flux and debugg the data of redux and saga.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
