// import React, { Component } from "react";
// import Axios from "axios";

// class RetrieveMenuItems extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       // menuType: menuType,
//       menuItems: [],
//     };
//   }

//   componentDidMount() {
//     console.log('menuSize=', this.props.menuSize);
//     Axios.get("https://entree-f18.herokuapp.com/v1/menu/" + this.props.menuSize )
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             MenuItems: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

// export default RetrieveMenuItems;