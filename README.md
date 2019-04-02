# Pet Project Adevinta: Movie Search Engine by Martí Malek

### Introduction

This project is a search engine for movies made with the forntend architecture of *Adevinta* (**react, ddd, es6, webpack, sui**). It has been made with the objective of learning a new frontend architecture and also to use it as a technical interview while approaching the scenario of a real life *Adevinta* project. 

### About the project

The project uses the [OMDb API](http://www.omdbapi.com), which gives you a list of movies and their detailed information.

#### The project is based on the Adevinta web convergence tools and conventions:

- [sui-ssr](https://github.com/SUI-Components/sui/tree/master/packages/sui-ssr)
- [sui-studio](https://github.com/SUI-Components/sui/tree/master/packages/sui-studio)
- [sui-domain](https://github.com/SUI-Components/sui/tree/master/packages/sui-domain)

#### Project Structure:

**Studio (components) repository:** [frontend-mv--uilib-components](https://github.com/martimalek/Pet-Project-Adevinta/tree/master/2-frontend-mv--uilib-components)

**Domain (business logic) repository:** [frontend-mv--lib-movies](https://github.com/martimalek/Pet-Project-Adevinta/tree/master/3-frontend-mv--lib-movies)

**Web server repository:** [frontend-mv--web-app](https://github.com/martimalek/Pet-Project-Adevinta/tree/master/4-frontend-mv--web-app)

### Technical Issues:

While doing this project I've come across multiple compatibility issues between *Adevinta*'s frontend architecture and *Windows OS*. There are a few of these that can be temporarilly overcome and I want to share the patches that I've found to resolve them.

- The first problem that I've found appears when trying to start the sui-studio:

    Basically you create your own studio with the following command

    ```sh
    > npx @s-ui/studio-create <your-studio-name>
    ```

    This works as expected, it creates the studio correctly, the problem comes when you try starting it:

    ```sh
    > npm run start
    ```

    Here is when it crashes:
    <pre><code>
    ./app.js 6:16
    Module parse failed: Unexpected token (6:16)
    You may need an appropriate loader to handle this file type.
    | import Root from './components/root'
    |
    > reactDOM.render(<Root />, document.getElementById('root'))
    |
    </code></pre>

    To fix this you have to change the regExp which is in line 11 of \<your-studio-name>\/node_modules/@s-ui/bundler/webpack.config.dev.js

    Basically you can either comment it (make sure that you also comment the places where it is used -> lines 71, 75) or change it to a silly regExp like 'ab+c' or whatever you come up with.

    When you make this changes and save your files you'll be able to start your studio without issues.

- The next problem arrives when creating a component:

    Every time you create a component an error will throw, don't panic, the component is actually being created, but to use it without running into problems you'll have to go to it's folder (not the parent one) and install it's dependencies manually with:

    ```sh
    > npm install
    ```

    As easy as that. Now your component works. Note that if you are using the *Adevinta*'s linter the console will tell you to lint a couple files. Just go to the path that shows in the console and lint them to keep going.

- There are some sui commands that don't work and I have not yet figured out patches for them:

    ```sh
    > npm run co
    ```

    This basically helps you commit your work with the syntax of sui so that the changelog of your sui-studio is dynamically created. When you try this in *Windows OS* it just won't work, it doesn't throw any error, just does nothing. What you can do is commit normally `git commit -m "<message>"` to be able to save your progress.

    ```sh
    > npm run release
    ```

    This command is used to make the release of your work, I suppose that this doesn't work because the commit is not successful.

> Note: Because of the above issues the components that you create with sui-studio cannot be uploaded to npm. To use them in your project you have to import them locally (using their relative path).

