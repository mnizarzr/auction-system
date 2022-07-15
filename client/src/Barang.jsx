import { Link } from "react-router-dom";

export default function Barang() {
     return (
          <body>
               <div class="navbar bg-neutral-focus">
                    <div class="tabs flex-1 mx-20">
                         <ul>
                              <a class="tab text-white text-2xl font-semibold">AuctionSystem</a>
                              <a class="tab text-white text-xl">Items</a>
                              <a class="tab text-white text-xl">Contact Us</a>
                         </ul>
                    </div>

                    <div class="mx-20">
                         <div class="dropdown dropdown-left dropdown-hover">
                              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                   <div class="w-10 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" />
                                   </div>
                              </label>
                              <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                   <li>
                                        <a class="justify-between">
                                             Profile
                                             <span class="badge">New</span>
                                        </a>
                                   </li>
                                   <li><a>Settings</a></li>
                                   <li><a>Logout</a></li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div class="py-10 px-20">
                    <div class="w-full h-32 card bg-base-300 rounded-box">
                         <div class="w-4/6">
                              All Items
                         </div>

                         <div class="w-2/6">
                              sort
                         </div>
                    </div>
               </div>
          </body>
     );
}