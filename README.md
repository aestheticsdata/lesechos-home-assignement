This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm install
# and
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

the app is made with  NextJS v14, the latest App router, TailwindCSS, and Typescript.

the project uses TailwindCSS, and a custom font, Roboto, is installed.

I used a custom data set, but identical to the one provided with your project, except that it's inspired from the real LesEchos website. It the same data structure.

to select a user, there is the .env.local file where user permissions are set : \<empty\>, RIGHT_1, RIGHT_1,RIGHT_2, of course it's just to be quick in the development of this home assignement.
Ideally a login system should be implemented. When the page is loaded a toast welcome the user selected with his rights.

Everything is Typescript typed. When types are re-used across components, interface are in separate files.

the app is Reponsive using TailwindCSS breakpoints, and Grid css. On mobile, the card are full-width.

All texts are in separate files to ease the change of texts and even implement an i18Next translation system.

NextJS api routes are leverage to simulate a real API, the frontend makes an HTTP call to retrieve data from the server. On the server side a fake latency is simulated with a Promise to be able to see the 
loader of the http service on the frontend side.
A service which makes the HTTP call to the api is wrapped in a custom hook : useNewsletters.ts. It uses the native fetch api. In a real app, Axios would have been uses with many usefull features.

when we click on a Subscribe or Register button, a toast is displayed 2 seconds at the top of the screen.

The app is deployed on a subdomain on my physical server at http://echo.1991computer.com, it's not https (although all my other apps on 1991computer.com are with https). Nginx acts as a proxy to the NodeJS server
running a compiled version of the app.

Import paths uses alias, to be cleaner than relative paths.

the home page is only used as a router entry point, and contains the Home component, which is splits into a CardGrid component and a Card component for each cards.
The Home component acts as a master component, the useNewsletters service, but we could have used the useNewsletters service directly inside the Grid component, instead of passing cards data from the service at the
Home component through props to the Grid component.

with more time allowed, writing unit tests (with Jest), components test (with React-Testing library), and E2E (with Plyawright), should be done.
We could have used React-Query to put in cache the api call to save bandwith, and make the application more reactive with data already loaded. To save the user credentials, especially the persmissions associated
with the user, we could have been used a light store like Zustand, and persist it in the Localstorage. But to save credentials like password and sensitive data, Localstorage is not the solution, we should use a cookie
with HttpOnly, and of course https, with encrypted password on the server side.


