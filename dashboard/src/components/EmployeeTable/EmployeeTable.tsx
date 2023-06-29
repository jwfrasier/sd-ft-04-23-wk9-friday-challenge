import SmallCard from "../Cardcomponents/SmallCard";
import { userData } from "../../assets/data";
const EmployeeTable = () => {
  return (
    <div className={`flex flex-col`}>
      {userData.map((user) => (
        <SmallCard {...user} />
      ))}
    </div>
  );
};

export default EmployeeTable;
