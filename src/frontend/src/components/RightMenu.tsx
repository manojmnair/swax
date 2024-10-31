import { Link } from "react-router-dom";
//import Profile from "./Profile";

export default function RightMenu() {

    return (
        <div className="h-screen flex flex-col gap-6 ">
            {/* <Profile /> */}
            <div className="p-4  rounded-lg shadow-md text-sm  flex flex-col gap-2 bg-zinc-600">
                <Link
                    to="/bondtoken"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/posts.png" alt="" width={20} height={20} />
                    <span>Bond Tokens - ASTb</span>
                </Link>
                <Link
                    to="/goldtoken"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/market.png" alt="" width={20} height={20} />
                    <span>Gold Token - ASTg</span>
                </Link>
                <Link
                    to="comingsoon"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/activity.png" alt="" width={20} height={20} />
                    <span>Gold backed - GLDa</span>
                </Link>

                <Link
                    to="comingsoon"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/events.png" alt="" width={20} height={20} />
                    <span>Bond backed - BNDa</span>
                </Link>

                <Link
                    to="comingsoon"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/albums.png" alt="" width={20} height={20} />
                    <span>BTC backed - BTCa</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/videos.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/news.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/courses.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/lists.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/settings.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>
            </div>
        </div>
    );
};


