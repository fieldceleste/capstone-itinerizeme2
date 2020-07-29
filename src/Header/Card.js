import React  from "react";
import { useSpring, animated } from 'react-spring'
import './styles.scss'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function Card() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}































//----------------------------------------------------------------->
  // export function Header(props){
  //   // const {userSignInStatus} = props;

  //   function doSignOut(){
  //     firebase.auth().signOut().then(function(){
  //       console.log('Successfully signed out!');
  //     }).catch((error) => {
  //       console.log(error.message);
  //     })
  //   }
  
  //   const setVisibility = () => {
  //     if (userSignInStatus) {
  //       return (
  //         <React.Fragment>
  //           <NavLink  to="/signin">My Trips</NavLink>
  //           <NavLink exact={false} onClick={() => doSignOut()} to='vasya'>Sign Out</NavLink>
  //         </React.Fragment>
  //       )
  //     } else {
  //       return (
  //         <React.Fragment>
  //         <NavLink  to="/signin">Sign In</NavLink>
  //       </React.Fragment>
  //       )
  //     }
  //   }
  //   return(
  //     <React.Fragment>
  //     <Nav/>
  //     {setVisibility()} 
  //     </React.Fragment>
  //   )  
  // }

  // Header.propTypes = {
  //   userSignInStatus: PropTypes.bool,
  //   userName: PropTypes.string,
  // }
 

