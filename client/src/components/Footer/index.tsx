function Footer() {
    return (
        <div className="w-full py-8 bg-slate-900 text-gray-300">
            <div className="w-4/5 mx-auto flex flex-col gap-4">
                <h2 className="font-bold text-2xl">BestoPelis</h2>
                <p className="w-1/2 text-gray-400">
                    Practice application about movie catalogs developed with
                    Express, React, MongoDB and Docker.
                </p>
                <hr className="border-gray-500 my-2" />
                <div className="flex justify-between">
                    <span className="text-gray-500">
                        © Copyright Alexander Requelme 2022
                    </span>
                    <div className="flex gap-4 font-bold">
                        <a href="">F.A.Q</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
