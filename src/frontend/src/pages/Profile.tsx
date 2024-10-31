
import AllProfiles from "../components/profile/AllProfiles";
import EditProfile from "../components/profile/EditProfile";
import { NoProfileMessage } from "../components/profile/NoProfileMessage";
export default function Profile() {

    return (
        <div className="h-screen   rounded-lg shadow-md text-md shadow-slate-500 bg-zinc-600">
            <div className="ml-12 mt-6 items-center">
                <h4>Profile</h4>
                <NoProfileMessage />
                <EditProfile className="mt-3 w-full max-w-2xl border-zinc-700/50 border-[1px] bg-zinc-900 drop-shadow-xl rounded-3xl flex flex-col items-center px-5 md:px-24 py-8" />
                <AllProfiles />
            </div>
        </div>



    )

}