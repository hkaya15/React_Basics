import React,{useEffect, useRef,useState ,memo} from 'react'
import styles from '../Footer2/SecondFooter.module.css'
import classNames from 'classnames'
import { useSecondFooterContext } from '../../contexts/SecondFooterContext';

// Class with ES6
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return 'I have a ' + this.brand;
  }
}






// Inheritance
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
    this.state = {
      item: "",
    }
  }
  //Spread Operator
  show(...names) {
    //let item=""
    let array = Array.from(names)
    return this.present() + ', it is a ' + this.model + this.turn(array);
  }

  turn(arrayItem) {
    this.state.item += " " + arrayItem
    return this.state.item
  }
}


 








function SecondFooter({children}) {
  const { val} = useSecondFooterContext();
  const [inputValue, setInputValue] = useState("");
  
  
  const count = useRef(0);
  const divRef= useRef();

  
  //Input Focus
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
    divRef.current.style.border="1px solid red";
  };


  console.log(count)
  console.log("render")


  // Useref state i güncellemez bellekte aynı değeri verir. UseEffect ile kullanıldığında değerin state'i güncellediği görülür.
   const increase = ()=>{
    count.current = count.current + 1;
   }
  
  useEffect(()=>{
    count.current = count.current + 1;
  })
  

  // const mycar = new Car("Ford");
  const model = new Model("Ford", "Kuga")
  let name=""

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name);
  }

  return <>
    <div className={styles.footer}>SecondFooter</div>
    <p>{model.show("s", 1, 2)}</p>
  
    {/* Form Submit*/}
    <form onSubmit={handleSubmit}>
      <label style={{
        color: "red", display: "flex", marginBottom: "26px", flexDirection: "row", justifyContent: "center", width: "400px",
        lineHeight: "26px", float: "left", alignItems: "center" , fontSize:"18px"
      }}>
        Enter name:
        <input style={{ marginLeft: "10px", width:"100px"}} type="text"  onChange={(e)=>name=e.target.value} />
      </label>
    </form>

    {/* Useref Usage*/}
    <div ref={divRef}>
    <input 
        ref={inputElement}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input and Change Div Border</button>
      <button onClick={increase}>Count Arttır</button>
      <p>{count.current}</p>
      <h1>Render Count: {count.current}</h1>
      </div>

    {/* Children */}
    {children}
    <p className={classNames(val === 3 ? styles.footer: "")}> {val}</p>
  </>
}




export default memo(SecondFooter)
