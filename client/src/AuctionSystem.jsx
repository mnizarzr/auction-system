import { Link } from "react-router-dom";

export default function auctionsystem() {
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

            <div class="flex">
                <div class="navbar bg-base-50 my-6 mx-24 w-full shadow-2xl">
                    <div class="w-1/12 justify-center text-black text-xl font-semibold">
                        <h1>Categories</h1>
                    </div>

                    <div class="w-5/6 list-none justify-center">
                        <ul class="menu menu-horizontal p-0">
                            <li tabindex="0">
                                <a class="text-lg">
                                    Art
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="text-lg">
                                    Furniture
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="text-lg">
                                    Jewelry
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="text-lg">
                                    Collectibbles
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="text-lg">
                                    Fashion
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="text-lg">
                                    Home & Garden
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    );
}