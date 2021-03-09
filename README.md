# Redux_todo

実行には下記コマンドを実行

1.
    docker-compose build
2.
    docker-compose run --rm node sh -c "create-react-app redux_todo"
<!-- 2.
    docker-compose run --rm node sh -c "yarn create react-app redux_todo"
2.
    docker-compose run --rm node sh -c "yarn add create-react-app && npx create-react-app redux_todo"
2.
    docker-compose run --rm node sh -c "npm install -g create-react-app && npx create-react-app ." こちらでは権限関係でエラーが発生
-->
2.5.
    docker-compose run --rm node sh -c "cd redux_todo && yarn add react-redux redux-thunk whatwg-fetch express mongoose body-parser && yarn global add nodemon"

    docker-compose exec node bash

    コンテナ内部で

    npx nodemon redux_todo/server.js

3.
    docker-compose up -d
4.
    docker-compose down
