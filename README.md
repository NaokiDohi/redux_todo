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
2.5.
    docker-compose run --rm node sh -c "cd react-redux redux_todo && yarn add express mongose body-parser"    
-->
3.
    docker-compose up -d
4.
    docker-compose down
