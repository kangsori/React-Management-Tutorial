import React , { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
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
]

class App extends Component {
  render(){
    return(
      <div>
        { customers.map(c =>{
             return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
             )
          })
        }
      </div>
    );
  }
}

export default App;
