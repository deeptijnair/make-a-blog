import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Deepthi');

 //   let name = 'Deepthi';

    const handleClick = () => {
        setName('India');
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;