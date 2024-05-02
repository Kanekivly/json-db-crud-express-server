# json-db-crud-express-server
Example of crud operations in nodejs(express ) and json as database

crud in json by kaneki vly  (ghoulCode)

follow my WhatsApp channel: https://whatsapp.com/channel/0029VadVtU3JUM2gAlVaWF1a

lets use Curl Commands to fetch the data
pkg install curl

check with curl cmd, list acc

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
 
====>
//adding an account 

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
<h2>behind (backend)</h2>
you'll see made requests 
and nodemon will refresh the server avoiding crash even on being updated it will still run

this is not advisable to use or real time environment, maybe on small task but need to isolation 
this is just an example of crude
yes it does save permanently until you request deletion on server
you can fork and explore follow me at least 
