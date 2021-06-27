const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers',(req,res) => {
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '강소리',
        'birthday' : '940218',
        'gender' : '여자',
        'job' : '섹시한커리어우먼'
      },
      {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '노민성',
        'birthday' : '960305',
        'gender' : '여자',
        'job' : '섹시한커리어우먼왼쪽닝겐'
      },
      {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '감동훈',
        'birthday' : '960305',
        'gender' : '남자',
        'job' : '섹시한커리어우먼오른쪽닝겐'
      }
      ])
} );

app.listen(port, () => console.log(`Listening on port ${port}`));