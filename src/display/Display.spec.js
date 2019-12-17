// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

test('Defaults to the word unlocked and open', async () => {

    //Set up Props
    const closed = false;
    const locked = false;

    //Bring in Component
    const displayComponent = rtl.render(<Display closed={closed} locked={locked}/>);

    //Grab Node Element from Component
    const unlocked = await displayComponent.findByText(/Unlocked/i)

    //Here is what findByText will bring back as a promise 
    console.log(unlocked.textContent);

    //Assert 
    expect(unlocked.textContent).toBe("Unlocked");

})

test("That it cannot be closed or opened if it is locked", async () => {
  
    const displayComponent = rtl.render(<Display locked={true} closed={true}/>);
    expect(displayComponent.asFragment()).toMatchSnapshot();

    const buttonDisabled = document.querySelectorAll('.led');

    console.log(buttonDisabled[0]);

    expect(buttonDisabled[0]).toHaveClass('red-led');
})