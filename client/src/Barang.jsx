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

                    <div class="tabs mx-20">
                         <a
                              class="tab text-white text-base font-semibold"
                              href="./Register">
                              Register
                         </a>
                         <a
                              class="tab text-white text-base font-semibold"
                              href="./Login">
                              Login
                         </a>
                    </div>
               </div>
          </body>
     );
}