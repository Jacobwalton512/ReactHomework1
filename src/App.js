import React from "react";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import AnimalCard from "./components/AnimalCard";
import animals from "./animals.json";

const App = () => 
<div>
<Counter />
<Wrapper>
 {
      animals.map(animal => ( 
      <AnimalCard key = {animal.id} name={animal.name} image ={animal.image}/>
      ))
    }
    </Wrapper>;
</div>

export default App;
