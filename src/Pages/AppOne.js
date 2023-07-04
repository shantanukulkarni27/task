import { CardOne, CardThree, CardTwo } from "../Components"
import { useState } from 'react';

const AppOne = () => {

    const [state,setState]=useState('CardOne')

    const handleCardOne=()=>{
      setState('Card One')
      console.log("Card One");
    }
    const handleCardTwo=()=>{
      setState('CardTwo')
      console.log("Card Two");
    }
    const handleCardThree=()=>{
      setState('Card Three')
      console.log("Card Three");
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '27%' }} onClick={handleCardOne}>
                    <CardOne />
                </div>
                <div style={{ width: '27%' }} onClick={handleCardTwo}>
                    <CardTwo />
                </div>
                <div style={{ width: '27%' }} onClick={handleCardThree}>
                    <CardThree />
                </div>
            </div>

            <div>
                <h1>{state}</h1>
            </div>

        </>
    )
}

export default AppOne