import { Link } from "react-router-dom";

export default function Dasboard() {
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

            <div class="flex">
                <div class="navbar my-6 mx-24 w-full text-4xl font-semibold">
                    <p>Hottest upcoming items</p>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="carousel carousel-center rounded-box w-4/6 h-96">
                    <div id="item1">
                        <a href="./Barang">
                            <div class="card w-1/2 bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="item2">
                        <a href="./Barang">
                            <div class="card w-1/2 bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Teknologi" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">Teknologi!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="item3">
                        <a href="./Barang">
                            <div class="card w-1/2 bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="item4">
                        <a href="./Barang">
                            <div class="card w-1/2 bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </body>
    );
}