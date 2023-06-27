import EmployeeTable from "../EmployeeTable/EmployeeTable";
import { MetricCards } from "../MetricCards/MetricCards";
import { TaskTable } from "../TaskTable/TaskTable";

const Dashboard = () => {
  return (
    <div>
      <MetricCards />
      <TaskTable />
      <EmployeeTable />
    </div>
  );
};

export default Dashboard;
