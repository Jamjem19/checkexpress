const express = require('express')

const app = express()

const port = 3000

//app.listen(port,()=>console.log("running server" + port))//


app.use((req,res,next) => {

    var date=new Date();

    if (date.getDay()==7 || date.getDay()==6 || date.getHours() < 9 || date.getHours()>17)
    {
        res.status(403).end("we are working only in (monday,friday)")
    }
    else {
        return next ();
    }


}
);

app.use(express.static('Houssem'))

app.listen(port,(err)=>{

  err? console.log(err) : console.log('server is running')

})