import React from "react";
import CartHeader from "./CartHeader";

const Header: React.FC = () => {
    return (
        <header className="">
            <div className="flex justify-center shadow-xl">
                <div className="w-[1000px] flex justify-between items-center p-4">
                    <a href="/">
                        <h1 className="text-2xl font-bold">Fakestore app</h1>
                    </a>
                    <CartHeader />
                </div>
            </div>

        </header>

    );
};

export default Header;