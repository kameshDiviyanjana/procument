import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Orderform from '../src/Orderform'
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
import {it} from '@jest/globals';


var mock = new MockAdapter(axios);


test('add order test ', async () => { 

     render(<Orderform/>)

    const name ='kamele'
    const enail ='kamke@gmail.com'
    const date ='2023/05/23'
    const empid ='g458'
    const orederdescrip = 'orde dtts'
    const buttonclick = screen.getByTestId("clicaddorder");
      
   mock.onPost("/add").reply(200);

   fireEvent.changeText(name,'kamle')
   fireEvent.changeText(enail,'kamke@gmail.com')
   fireEvent.changeText(date,'2023/05/23')
   fireEvent.changeText(empid,'g458')
   fireEvent.changeText(orederdescrip,'orde dtts')

   fireEvent.press(buttonclick)

   await waitFor(() => {
    expect(mock.history.post.length).toBe(1);
  });
  
 })