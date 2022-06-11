import { Link } from "react-router-dom";
import ilustrasi from "./assets/ilustrasi.svg";

export default function Register() {

    return (
        <div className="App h-screen flex justify-center items-center">
            <div>
                <h1 class="font-bold text-2xl">REGISTER</h1>
                <form class="form-control">
                    <label class="input-group mt-4">
                        <span class="w-28">Full Name</span>
                        <input type="text" placeholder="Ex: John Due" class="input input-bordered"/>
                    </label>
                    <label class="input-group mt-4">
                        <span class="w-28">Email</span>
                        <input
                            type="email"
                            placeholder="info@site.com"
                            class="input input-bordered"
                        />
                    </label>
                    <label class="input-group mt-4">
                        <span class="w-28">Password</span>
                        <input type="password" placeholder="Minimal 8 Karakter" class="input input-bordered" />
                    </label>
                </form>
                <form class="flex items-left">
                    <p class="mt-2">
                        Sudah punya akun?
                        <a class="mx-1 link link-primary">
                            <Link to="/login">Login</Link>
                        </a>
                    </p>
                </form>
                <form class="flex justify-center">
                    <button class="btn btn-primary px-20 text-white mt-2" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>

            <div class="flex justify-center">
                <img src={ilustrasi} alt="ilustrasi" class="w-3/5" />
            </div>
        </div>
    );
}