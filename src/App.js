import React from 'react';
import './App.css';



const LetterBoxCss = "border-2 border-solid border-black text-center focus:outline-none float-left text-white bg-black w-8 h-8 text-sm 2xl:w-24 2xl:h-24 2xl:text-7xl xl:w-20 xl:h-20 xl:text-4xl lg:w-16 lg:h-16 lg:text-2xl md:w-12 md:h-12 md:text-lg sm:w-8 sm:h-8 sm:text-sm flex items-center justify-center"
const numberBoxCssActive = " border-2 border-solid border-black text-center focus:outline-none float-left bg-white w-8 h-8 text-sm 2xl:w-24 2xl:h-24 2xl:text-7xl xl:w-20 xl:h-20 xl:text-4xl lg:w-16 lg:h-16 lg:text-2xl md:w-12 md:h-12 md:text-lg sm:w-8 sm:h-8 sm:text-sm flex items-center justify-center"
const numberBoxCssInactive = "border-black text-center focus:outline-none float-left text-white bg-black w-8 h-8 text-sm 2xl:w-24 2xl:h-24 2xl:text-7xl xl:w-20 xl:h-20 xl:text-4xl lg:w-16 lg:h-16 lg:text-2xl md:w-12 md:h-12 md:text-lg sm:w-8 sm:h-8 sm:text-sm flex items-center justify-center"
const currentNumberBoxCssInactive="text-9xl text-center border-2 p-0 border-solid border-black select-none text-transparent"
const currentNumberBoxCssActive="text-9xl text-center border-2 p-0 border-solid border-black"
const buttonCss = "after:table after:clear-both bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3"

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function generateFiveRandomNumbersArray(min, max){
  var HashSet = require('hashset');
  var hashset = new HashSet();
  while (hashset.length < 5) {
    hashset.add(Math.floor(Math.random() * (max - min) + min))
  }
  return hashset.toArray();
}
//B is 1-15 I is 16-30 N is 31-45 G is 46-60 O is 61-75
// generate 5 numbers for each letter return array
function generateBingoBoardValueArray(){
  var arrayB, arrayI, arrayN, arrayG, arrayO;
  arrayB = generateFiveRandomNumbersArray(1,15);
  arrayI = generateFiveRandomNumbersArray(16,30);
  arrayN = generateFiveRandomNumbersArray(31,45);
  arrayG = generateFiveRandomNumbersArray(46,60);
  arrayO = generateFiveRandomNumbersArray(61,75);
  let arrayBingo = [].concat(arrayB, arrayI, arrayN,arrayG,arrayO);
  return arrayBingo;
}

function Square(props) {
    return (
      <p className={props.css}>
          {props.value}
      </p>
    );
}

class CurrentDraw extends React.Component {
  render(){
  const output = [];
  if(this.props.value === null){
    output.push(<p className={currentNumberBoxCssInactive} key={1}>
          nothing
    </p>)
  }
    else if(0 < this.props.value && this.props.value < 16){
      output.push(<p className={currentNumberBoxCssActive} key={1}>
          B{this.props.value}
      </p>)
    }
    else if(15 < this.props.value && this.props.value < 31){
      output.push(      <p className={currentNumberBoxCssActive} key={1}>
          I{this.props.value}
      </p>)
    }
    else if(15 < this.props.value && this.props.value < 31){
      output.push(      <p className={currentNumberBoxCssActive} key={1}>
          N{this.props.value}
      </p>)
    }
    else if(30 < this.props.value && this.props.value < 46){
      output.push(      <p className={currentNumberBoxCssActive} key={1}>
          G{this.props.value}
      </p>)
    }
    else if(45 < this.props.value && this.props.value < 61){
      output.push(      <p className={currentNumberBoxCssActive} key={1}>
          O{this.props.value}
      </p>)
    }
    else if(60 < this.props.value && this.props.value < 76){
      output.push(      <p className={currentNumberBoxCssActive} key={1}>
          I{this.props.value}
      </p>)
    }
    return (
      <div>{output}</div>
      
    );
  }

}

class Board extends React.Component {
  constructor(props) {   

    super(props);    
    this.state = {      
      squares_value: range(1,75),//generateBingoBoardValueArray(),
      squares_active: range(1,75),
      squares_css: Array(75).fill(numberBoxCssActive),
      current_value: null,
    }
    this.drawNumber=this.drawNumber.bind(this);  
    this.resetBoard=this.resetBoard.bind(this);
    this.handleClickGoToMenu=props.handleClickGoToMenu.bind(this)
  }

  // Pick random index of the active squares.
  // use that to change state of active squares
  // remove that index from the active squares
  drawNumber(){
    if(this.state.squares_active.length > 0){
      let randomSquaresIndex = Math.floor(Math.random()*this.state.squares_active.length);
      let squares_active = this.state.squares_active.slice()
      let value = squares_active.splice(randomSquaresIndex, 1);
      const squares_css = this.state.squares_css.slice();
      squares_css[this.state.squares_value.indexOf(value[0])] = numberBoxCssInactive;
      this.setState({squares_css: squares_css});
      this.setState({squares_active: squares_active})
      this.setState({current_value: value[0]})
    }
  }

  resetBoard(){
    this.setState({squares_css: Array(75).fill(numberBoxCssActive)});
    this.setState({squares_active: range(1,75)})
    this.setState({current_value: null})

  }

  renderSquare(i) {
    return <Square value={this.state.squares_value[i]} css={this.state.squares_css[i]}/>;
  }

  renderCurrentDrawnValue(){
    return <CurrentDraw value={this.state.current_value} />;
  }

  renderBoard(){
    const B = [];
    B.push(<p class={LetterBoxCss} key={1}>B</p>);
    for (let i = 0; i < 15; i++) {
      B.push(this.renderSquare(i));
    }
    const I = [];
    I.push(<p class={LetterBoxCss} key={1}>I</p>);
    for (let i = 15; i < 30; i++) {
      I.push(this.renderSquare(i));
    }
    const N = [];
    N.push(<p class={LetterBoxCss} key={1}>N</p>);
    for (let i = 30; i < 45; i++) {
      N.push(this.renderSquare(i));
    }
    const G = [];
    G.push(<p class={LetterBoxCss} key={1}>G</p>);
    for (let i = 45; i < 60; i++) {
      G.push(this.renderSquare(i));
    }
    const O = [];
    O.push(<p class={LetterBoxCss} key={1}>O</p>);
    for (let i = 60; i < 75; i++) {
      O.push(this.renderSquare(i));
    }

    return (
      <div>
        <div class=" after:table after:clear-both " key={1}>
        {B}
        </div>
        <div class=" after:table after:clear-both" key={2}>
        {I}
        </div> 
        <div class=" after:table after:clear-both" key={3}>
        {N}
        </div>
        <div class=" after:table after:clear-both" key={4}>
        {G}
        </div>
        <div class=" after:table after:clear-both" key={5}>
        {O}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class=" ml-auto mr-auto w-auto ">
      <div class="text-center text-7xl ">
        BINGO
      </div>       
        {this.renderBoard()}
        <div class="">
          <button class={buttonCss} onClick={this.drawNumber}>Draw</button>
          <button class={buttonCss} onClick={this.resetBoard}>Reset</button> 
          <button class={buttonCss} onClick={this.props.handleClickGoToMenu}>Menu</button>  
                
        </div>
        <div>
          {this.renderCurrentDrawnValue()}
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
  constructor(props) {   
    super(props);    
    this.state = {      
    }
    
  }

  render(){
    return(
      <>
      <div class=" flex flex-row">
      <Board handleClickGoToMenu={this.props.handleClickGoToMenu}/>
      </div>
      <footer class="border-t border-gray-400 fixed w-full left-0 bottom-0  ">
        <div class="flex flex-wrap justify-center ">
          <ul class="flex items-center">
            Made by Jonathan Yee
          </ul>
        </div>
    </footer>
    </>
    );
  }
}

class Sheet extends React.Component{
  render(){
    const css="border-2 border-solid border-black text-center focus:outline-none float-left bg-white w-36 h-36 flex items-center justify-center text-8xl"
    const bingoArray = generateBingoBoardValueArray()
    bingoArray[12] = "Free Space"
    const B = [];
    for (let i = 0; i < 5; i++) {
      B.push(<p class={css}>{bingoArray[i]}</p>);
    }
    const I = [];
    for (let i = 5; i < 10; i++) {
      I.push(<p class={css}>{bingoArray[i]}</p>);
    }
    const N = [];
    for (let i = 10; i < 15; i++) {
      if(i===12){
        N.push(<p class="border-2 border-solid border-black text-center focus:outline-none float-left bg-white w-36 h-36 flex items-center justify-center text-5xl break-normal">Free Space</p>);
      }
      else{
        N.push(<p class={css}>{bingoArray[i]}</p>);
      }

    }
    const G = [];
    for (let i = 15; i < 20; i++) {
      G.push(<p class={css}>{bingoArray[i]}</p>);
    }
    const O = [];
    for (let i = 20; i < 25; i++) {
      O.push(<p class={css}>{bingoArray[i]}</p>);
    }
    return(
    <>
    <div class="mb-40"> 
    <div class="flex items-center justify-center text-8xl m-6">BINGO</div>
    <div class="flex flex-row items-center justify-center ">

    <div class=" p-0 flex flex-col">
    {B}
    </div>
    <div class=" p-0 flex flex-col">
    {I}
    </div>
    <div class=" p-0 flex flex-col">
    {N}
    </div>
    <div class=" p-0 flex flex-col">
    {G}
    </div>
      <div class="flex flex-col">
      {O}
      </div>
    </div>
    </div>
    </>
    );
  }
}

function Sheets (props){
  
    const sheets = [];
    for (let i = 0; i < props.value; i++) {
      sheets.push(<Sheet id={1}/>)
    }

    return(
      <>
      <div class=" flex items-center justify-center text-8xl m-6">
        {props.value} pages ready to print. Instructions and back button.
      </div>
      <div>
      <button class="after:table after:clear-both bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3" onClick={props.handleClickStartBingo}>Start Bingo</button>
      <button class="after:table after:clear-both bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3" onClick={props.handleClickGoToMenu}>Menu</button>
      </div>
      <div>{sheets}</div>
      </>
    );
  
}

class Menu extends React.Component{
  constructor(props) {   
    super(props);    
    this.state = {
      page: [],      
      currentPage: "Menu",
      numberToPrint: 1,
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);    
  }
  handleClickMakeSheets = () =>{
    this.setState({currentPage: "Sheets"})
  }
  handleClickStartBingo = () =>{
    console.log("handleClickStartBingo")
    this.setState({currentPage: "Game"})
  }
  handleChange(event){
    this.setState({numberToPrint: event.target.value})
  }
  handleSubmit(){
    if(this.state.numberToPrint < 1){
      alert("Only positive numbers allowed.");
    }
    else{
      this.setState({currentPage: "Sheets"})
    }
  }
  handleClickGoToMenu = () => {
    console.log("handleClickGoToMenu")
    this.setState({currentPage: "Menu"})
  }
  render(){
    const currentPage = []
    if(this.state.currentPage === 'Menu'){
      currentPage.push(      
      <>
        <div class=" flex items-center justify-center mt-40 font">
        <div class="flex flex-col text-center">
        <p class=" text-9xl">BINGO</p>
        <button class="after:table after:clear-both bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3" onClick={this.handleClickStartBingo}>Start Bingo</button>
        <form class="after:table after:clear-both bg-transparent text-blue-700 font-semibold py-4 px-8 border border-blue-500 rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3" >
        <label >
        <p>Sheets To Print</p>
        <input class="after:table after:clear-both bg-transparent text-blue-700 font-semibold py-4 px-8 border border-blue-500 rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3 text-center" type="number" value={this.state.numberToPrint} onChange={this.handleChange}>

        </input>
        <button class="after:table after:clear-both bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3" onClick={this.handleSubmit}>
        Submit
        </button>
        </label>
        </form>
        </div>
        </div>
      </>
      );
    }
    else if(this.state.currentPage === 'Sheets'){
      currentPage.push(<Sheets value={this.state.numberToPrint} handleClickStartBingo={this.handleClickStartBingo} handleClickGoToMenu={this.handleClickGoToMenu}/>);
    }
    else if(this.state.currentPage === 'Game'){
      currentPage.push(<Game handleClickGoToMenu={this.handleClickGoToMenu}/>);
    }
    return(
      <>
      <div>
      {currentPage}
      </div>
      
    </>
    );
  }
}
function App() {
  return (
    <>
    <Menu/>
    </>
  );
}

export default App;
