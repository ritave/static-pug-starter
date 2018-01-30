import * as express from "express";

import views from './views';

const app = express()
app.set('view engine', 'pug')

app.use((req, res, next) => {
   res.locals.production = app.get('env') == 'production';
   res.locals.development = app.get('env') == 'development'; 
   next();
})

app.use('/', views)


app.listen(8080, () => {
    console.log('Server is listening on 8080')
})
