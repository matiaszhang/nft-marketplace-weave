import { faCartShopping, faRightLeft, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { default: Table } = require("components/elements/Table");

const Activities = () => {
  const columns = [
    {
      title: "Activities",
      field: "activities",
      renderCell: (row) => (
        <div className="flex flex-row gap-3 items-center">
          {row.activities === "Bid" ? (
            <FontAwesomeIcon icon={faRightLeft} />
          ) : row.activities === "Changed price" ? (
            <FontAwesomeIcon icon={faTag} />
          ) : (
            <FontAwesomeIcon icon={faCartShopping} />
          )}
          <p className="text-2xl">{row.activities}</p>
        </div>
      ),
    },
    {
      title: "Items",
      field: "items",
      renderCell: (row) => (
        <div className="flex flex-row gap-4">
          <img src={row.nft} className="w-[60px] border border-white rounded" alt="nft-item" />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">{row.title}</p>
            <p className="text-white/[0.7] text-base/[22px]">{row.owner}</p>
          </div>
        </div>
      ),
    },
    { title: "Price", field: "price" },
    { title: "Quantity", field: "quantity" },
    { title: "Time", field: "time" },
  ];

  const dummyData = [
    {
      activities: "Bid",
      title: "CinematicElegance",
      nft: "/images/Frame 2.png",
      owner: "From: Kristin Watson",
      price: "3.478 ETH",
      quantity: "1",
      time: "Yesterday 7:15pm",
    },
    {
      activities: "Purchased",
      title: "PixelPalette",
      nft: "/images/Frame 3.png",
      owner: "From: Webb",
      price: "5.9 ETH",
      quantity: "1",
      time: "6/7/2023 1:34pm",
    },
    {
      activities: "Minted",
      title: "PixelCouture",
      nft: "/images/Frame 4.png",
      price: "On bid",
      owner: "Owner",
      quantity: "1",
      time: "6/7/2023 1:34pm",
    },
    {
      activities: "Fractionally owned",
      title: "ChromaTracks",
      nft: "/images/Frame 5.png",
      price: "2.934 ETH",
      owner: "Fractional ownership",
      quantity: "1",
      time: "2/6/2023 3:12pm",
    },
    {
      activities: "Changed price",
      title: "ArtAlchemy",
      nft: "/images/Frame 6.png",
      price: "2.8 ETH",
      owner: "Owner",
      quantity: "1",
      time: "9/5/2023 9:09pm",
    },
  ];

  return <Table headers={columns} data={dummyData} />;
};

export default Activities;
