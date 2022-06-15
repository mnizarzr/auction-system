import { Link } from "react-router-dom";

export default function Dasboard() {
    return (
        <div class="navbar bg-base-300">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">AuctionSystem</a>
                <a class="btn btn-ghost normal-case text-xl">Items</a>
                <a class="btn btn-ghost normal-case text-xl">Contact Us</a>
            </div>

            <div class="dropdown dropdown-end">
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
    );
}