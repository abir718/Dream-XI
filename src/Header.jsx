


const Header = ({ coins, addCoins }) => {
    return (
        <section className="w-[80%] mx-auto">
            <div className="flex items-center justify-between py-4">
                <div>
                    <img className="h-16" src="/public/images/logo.png" alt="" />
                </div>
                <div className="flex items-center gap-6">
                    <p className="text-gray-500 font-medium">Home</p>
                    <p className="text-gray-500 font-medium">Fixtures</p>
                    <p className="text-gray-500 font-medium">Team</p>
                    <p className="text-gray-500 font-medium">Schedule</p>
                    <div className="border-2 p-2 rounded-lg w-fit flex items-center gap-1 justify-center hover:bg-gray-200 transition duration-300">
                        <p className="font-bold">{coins}</p>
                        <p className="font-bold  ">Coin</p>
                        <img src="/public/images/coin.png" alt="" />
                    </div>

                </div>

            </div>
            <div className="h-[600px]  bg-cover bg-no-repeat bg-[url('/images/background.jpg')] flex flex-col items-center justify-center gap-6 rounded-lg">
                <img className="h-72 " src="/public/images/logo.png" alt="" />
                <h1 className="text-white text-5xl font-bold">Assemble Your Ultimate Dream 11 Football Team</h1>
                <p className="font-medium text-[#B0E0E6] text-3xl">Beyond Boundaries Beyond Limits</p>
                <button onClick={addCoins} className="font-medium text-xl text-neutral bg-[#a3f4ff] p-3 rounded-lg">Claim Free Coins</button>
            </div>

        </section>
    );
};

export default Header;