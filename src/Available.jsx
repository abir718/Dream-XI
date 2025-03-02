

const Available = ({players}) => {
    return (
        <div className="w-[80%] mx-auto mt-10">
            <div>
                <h1 className="text-2xl font-bold">Available Players </h1>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-14 mt-10">
            {players.map((player, index) => (
            <div key={index} className="p-4 border w-fit rounded-lg flex flex-col gap-1">
            <img
                src={player.image} className="w-80 h-80 object-cover rounded-lg"/>        
                <h1 className="text-xl font-bold">{player.name}</h1>
                <p className="font-medium">Nationality : {player.country}</p>
                <p className="font-medium">Role : {player.role}</p>
                <p className=" text-green-600 font-semibold">Bidding Price : {player.biddingPrice}$</p>
                <div className="text-right">
                <button className="text-lg font-medium border-2 p-1 rounded-lg hover:bg-gray-300 transition duration-300 ">Choose Player</button>
                </div>

            </div>
  ))}
            </div>

            </div>

        </div>
    );
};

export default Available;