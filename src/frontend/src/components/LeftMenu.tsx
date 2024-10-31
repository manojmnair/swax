import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import ProfileCard from "./profile/ProfileCard";
import { UserProfile } from "../../../declarations/backend/backend.did";
import { useActor } from "../ic/Actors";
export default function LeftMenu() {
    const [profiles, setProfiles] = useState<[string, UserProfile][]>([]);
    const [loading, setLoading] = useState(true);
    const { actor } = useActor();
    useEffect(() => {
        if (!actor) return;
        (async () => {
            const response = await actor.list_profiles();
            if (response && "Ok" in response) {
                setProfiles(response.Ok);
            }
            setLoading(false);
        })();
    }, [actor]);
    return (
        <div className="h-screen flex flex-col gap-6 ">
            <div className="grid grid-cols-1 gap-15 md:grid-cols-3 ml-12 ">
                {loading && (
                    <div className="flex flex-col items-center justify-center w-full h-64">
                        <FontAwesomeIcon className="w-4 h-4" icon={faCircleNotch} spin />
                    </div>
                )}
                {profiles.map((p) => (
                    <ProfileCard key={p[0]} principal={p[0]} profile={p[1]} />
                ))}
            </div>
            <div className="p-4  rounded-lg shadow-md text-sm  flex flex-col gap-2 bg-zinc-600">
                <Link
                    to="/holdings"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/posts.png" alt="" width={20} height={20} />
                    <span>My Investments</span>
                </Link>

                <Link
                    to="/comingsoon"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/activity.png" alt="" width={20} height={20} />
                    <span>My trades</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/market.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/events.png" alt="" width={20} height={20} />
                    <span>-</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/albums.png" alt="" width={20} height={20} />
                    <span>-</span>
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


