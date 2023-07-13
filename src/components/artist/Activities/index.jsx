import Table from "components/elements/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightLeft, faTag } from "@fortawesome/free-solid-svg-icons";
import { dummyActivities } from "constant/dummyData";

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
          <p className="text-lg sm:text-xl lg:text-2xl">{row.activities}</p>
        </div>
      ),
    },
    {
      title: "Items",
      field: "items",
      renderCell: (row) => (
        <div className="flex flex-col sm:flex-row gap-4 items-center ">
          <img src={row.nft} className="w-10 lg:w-[60px] h-10 lg:h-[60px] border border-white rounded" alt="nft-item" />
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <p className="text-base sm:text-lg lg:text-xl font-semibold">{row.title}</p>
            <p className="text-white/[0.7] text-sm lg:text-base/[22px]">{row.owner}</p>
          </div>
        </div>
      ),
    },
    { title: "Price", field: "price" },
    { title: "Quantity", field: "quantity" },
    { title: "Time", field: "time" },
  ];

  return <Table headers={columns} data={dummyActivities} />;
};

export default Activities;
