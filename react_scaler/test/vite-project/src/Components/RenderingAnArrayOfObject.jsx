import ConditionalRendering from "./ConditionalRendering";
function RenderingAnArrayOfObject() {
  let Fruits = [
    { name: "Apple", price: 100 },
    { name: "Apple", price: 100 },
    { name: "mango", price: 150 },
    { name: "banana", price: 50 },
    { name: "orange", price: 90 },
  ];
  return (
    <div>
      {Fruits.map((fruit) => (
          <ConditionalRendering Name={fruit.name} Price={fruit.price}/>
      ))}
    </div>
  );
}
export default RenderingAnArrayOfObject;
