import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/slice/AuthenticationSlice';
import { NavLink } from "react-router-dom"

const MobileBar = ({setToggle}) => {
  const user = useSelector((state) => state.auth.user);
const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logoutUser());
  setToggle(false);
};
  return (
 <div className="w-[110vw] md:hidden fixed h-screen bg-[#ED4C22] left-[-25px] top-[-15px] flex justify-center items-start px-20 flex-col ">
    <i onClick={()=>setToggle(false)} className="ri-close-large-fill text-3xl absolute top-5 right-15"></i>

    <div className="text-3xl flex flex-col gap-10 text-start">
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "bg-[#f56642]  px-4 py-1 rounded-3xl" : ""} to={"/"}>Home</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "bg-[#f56642]  px-4 py-1 rounded-3xl" : ""} to={"/anarc-watch"}>Anarc Watch</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "bg-[#f56642]  px-4 py-1 rounded-3xl" : ""} to={"/anarcSkin"}>Anarc Skin</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "bg-[#f56642]  px-4 py-1 rounded-3xl" : ""} to={"/our-story"}>Our Story</NavLink>

        
    </div>
    {user ? (
  <button
    onClick={handleLogout}
    className="absolute text-4xl font-[roman] tracking-tighter bottom-15 italic text-white"
  >
    Logout
  </button>
) : (
  <NavLink
    onClick={() => setToggle(false)}
    className={(e) =>
      e.isActive
        ? 'bg-[#f56642]  px-4 py-1 rounded-3xl absolute text-4xl font-[roman] tracking-tighter bottom-15 italic'
        : 'absolute text-4xl font-[roman] tracking-tighter bottom-15 italic'
    }
    to="/login"
  >
    Login
  </NavLink>
)}


 </div>
  )
}

export default MobileBar
