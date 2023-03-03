function HelloWorld(){
    return <div>Hello World</div>
    //same as
    //return React.createElement('div', null, 'Hello World');
    //babel compiles into jsx, jsx transcompiles into Javascript
  }
export default HelloWorld;