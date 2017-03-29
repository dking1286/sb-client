# sb-client

## Getting started
If you do not have `yarn` installed, install it globally:
```bash
npm install -g yarn
```

Then, install the dependencies for the project:
```bash
yarn
```

## Development
To run the app in development mode,
```bash
yarn run start:dev
```

Then, navigate to `localhost:9090` in your browser of choice.

In development mode, the Webpack Dev Server has
Hot Module Replacement enabled and will recompile
when changes occur in the `app` directory.

## Production

To build the project for production,
```bash
yarn run build:prod
```
The output files will be located in the `dist` directory.