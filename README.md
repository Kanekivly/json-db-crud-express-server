# json-db-crud-express-server
Example of crud operations in nodejs(express ) and json as database
setup:
 pkg install nodejs 
 npm i express && npm install nodemon 
:
 Run:
  npm test
  :
Rest crud api in json-db (js) by kaneki vly  (ghoulCode)

follow my WhatsApp channel: https://whatsapp.com/channel/0029VadVtU3JUM2gAlVaWF1a

lets use Curl Commands to fetch the data
<hr>
pkg install curl

check with curl cmd, list acc
<img src="https://github.com/Kanekivly/json-db-crud-express-server/blob/main/one.png" height="300" />
//list accounts 
curl --location 'http://localhost:8000/account/list'

//output 
{
    "3507": {
        "username": "legionrokudo",
        "email": "legionX31@mail.com",
        "password": "legionnaire@100"
    },
    "20790": {
        "username": "ghoulCode",
        "email": "followWhatsapp@description.com",
        "password": "Follow@GitHub&Like"
    },
    "83701": {
        "username": "fork&credit",
        "email": "Tokyo@ghoul.com",
        "password": "kunKaneki$100"
    },
    "2972":{
    "username":"usebiotofindme",
    "email":"have@Anice.day",
    "password":"expectmoretutorials"
    }
}
 <hr>
====>
//adding an account 
<img src="https://github.com/Kanekivly/json-db-crud-express-server/blob/main/two.png" height="300" />
curl --location 'http://localhost:8000/account/addaccount' \
--header 'Content-Type: text/plain' \
--data-raw '{
        "username": "legion",
        "email": "legion@mail.com",
        "password": "legionnaire@100"
}'

//output 

{
    "success": true,
    "msg": "your account has been created successfully "
}

<hr>
<h2>behind on (backend)</h2>
<img src="https://github.com/Kanekivly/json-db-crud-express-server/blob/main/three.png" height="300" />
you'll see all made requests from client, 
and nodemon will refresh the server every after a new request or editing a file in a server to avoiding crash or shutting down the server even when being updated, it will still run
<hr>
this is not advisable to use for a real time environment, maybe on a small project for learning Rest crud api, you should upgrade security 
this is just an example of a crud rest API using nodejs , express, Json and the purpose of nodemon
<hr>
yes it does save permanently like any other database until you request deletion on server
you can fork and explore follow me at least 
