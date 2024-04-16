import React, {useState} from 'react';




function Teste() {

const [count, setCount] = useState(50);

    function Somar(){
        setCount (count +1);
    }

    function Subtrair(){
        setCount (count -1);
    }


        return <div>
            <h1>{count}</h1>
            <button onClick ={Somar}> Somar</button>
            <button onClick ={Subtrair}>Subtrair</button>
        </div>;

}

export default Teste;
