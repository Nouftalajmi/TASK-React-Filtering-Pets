import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";
import Seatchbar from "./Searchbar";

function PetsList() {
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  const filteredTypePets = pets.filter((pet) => {
    return pet.type.includes(type);
  });
  const filteredPets = filteredTypePets.filter((pet) => {
    return pet.name.toLowerCase().includes(query.toLowerCase());
  });

  const petList = filteredPets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  function changeQuery(event) {
    setQuery(event.target.value);
  }
  function changeType(event) {
    setType(event.target.value);
  }

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <Seatchbar changeQuery={changeQuery} />
              <br />
              Type:
              <select className="form-select" onChange={changeType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
