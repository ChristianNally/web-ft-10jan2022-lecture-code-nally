import React from "react";


class OurComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      firstname: 'Bob',
      intervalReference: null
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler(){
  //   // THIS IS BAD: this.state = this.state + 1;
  //   this.setState({counter: this.state.counter + 1 });
  // }

  clickHandler = () => {
    this.setState({counter: this.state.counter + 1 });
  };

  componentDidMount(){
    console.log(`component did mount`);
    const interval = setInterval(()=>{console.log('poll the API for updates')},2000);
    this.setState({intervalReference: interval});
  }

  componentDidUpdate(){
    console.log(`component did update`);
  }

  componentWillUnmount(){
    console.log(`component will unmount`);
    clearInterval(this.state.intervalReference);
  }

  render(){
    return (
      <div>
        <h3>I am class based.</h3>
        <p>Counter: {this.state.counter}</p>
        <button onClick = { () => this.clickHandler() }>Add 1</button>
        <p>{this.props.thing1}</p>
      </div>
    );
  }

}

export default OurComponent;

// export default function OurComponent () {

//       const [value,setValue] = useState(1);


//   return (
//     <div>
//       <h1>Our Component</h1>
//     </div>
//   );

// };
