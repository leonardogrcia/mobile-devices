interface pet {
  animal: string;
  age: number;
  name: string;
}

const pet: pet = {
  age: 2,
  animal: "Dog",
  name: "Scooby",
};

const Dog = () => {
  return (
    <div>
      {pet.animal === "Dog"
        ? "Who let the dogs out: " + pet.name + ", " + pet.age
        : "Are we in Jumanji " + pet.name + ", " + pet.animal}
    </div>
  );
};

export default Dog;
