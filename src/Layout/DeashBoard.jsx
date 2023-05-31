import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaBookmark,
  FaCalendarAlt,
  FaHome,
  FaRocketchat,
  FaShoppingCart,
  FaThList,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaUtensils,
  FaVoicemail,
  FaWallet,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";

const DeashBoard = () => {
  const [cart] = useCart();

  // TODO : Load data from the server to have a dynamic isAdmin base on data
  const isAdmins = true;

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            <div className="text-center pb-10">
              Bistro Boss <br /> Restaurant
            </div>
            <ul>
              {/* <!-- Sidebar content here --> */}
              {isAdmins ? (
                <>
                  <li>
                    <NavLink to="/">
                      <FaHome />Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <FaUtensils />ADD Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservation">
                      <FaThList /> MenageITEM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/history">
                      <FaBook /> Menage Booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allusers">
                      <FaUsers/> ALL USERS
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/">
                      <FaHome /> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservation">
                      <FaCalendarAlt /> Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/history">
                      <FaWallet /> Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/mycart">
                      <FaShoppingCart></FaShoppingCart> My Cart
                      <div className="badge badge-secondary">
                        +{cart?.length || 0}
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/review">
                      <FaRocketchat></FaRocketchat> Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/booking">
                      <FaBookmark></FaBookmark> My Booking{" "}
                    </NavLink>
                  </li>
                </>
              )}

              <div className="divider"></div>
              <li>
                <NavLink to="/menu">
                  <FaBars /> Our Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/salad"> Order Food</NavLink>
              </li>
              <li>
                <NavLink>
                  <FaVoicemail /> Contact{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeashBoard;
