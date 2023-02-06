import RequestsTable from "./RequestsTable";
import Header from "./header";
import SubHeader from "./SubHeader";

const Lock = () => {
  return (
    <div>
      <Header></Header>
      <SubHeader value="Approve/Reject Purchase Request"></SubHeader>
      <RequestsTable></RequestsTable>
    </div>
  );
};

export default Lock;
