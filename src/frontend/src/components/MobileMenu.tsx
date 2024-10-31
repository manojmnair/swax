
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="md:hidden ">
            <div
                className="flex flex-col gap-[4.5px] cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""
                        } origin-left ease-in-out duration-500`}
                />
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""
                        } ease-in-out duration-500`}
                />
                <div
                    className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""
                        } origin-left ease-in-out duration-500`}
                />
            </div>
            {isOpen && (
                <div className="absolute left-0 top-16 w-full h-[calc(100vh-64px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
                    <Link to="/">Home</Link>
                    <Link to="/greeting">Greeting</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="/">Connect</Link>
                    <Link to="/">Deposit</Link>
                    <Link to="/">Withdraw</Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
