import { ReactComponent as BookMarkIcon } from "../../assets/img/bookmark.svg";

function Header() {
    return (
        <header className="h-16 bg-white shadow flex items-center justify-center">
            <div className="w-4/5 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <img
                        className="w-12 h-12"
                        src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/undefined/external-movie-fine-arts-flatart-icons-flat-flatarticons.png"
                        alt="app-logo"
                    />
                    <h1 className="font-bold text-2xl">BestoPelis</h1>
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex gap-1 items-center">
                        <BookMarkIcon className="w-8 h-8 text-gray-500"/>
                        Watchlist
                    </div>
                    <button>SigIn</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
