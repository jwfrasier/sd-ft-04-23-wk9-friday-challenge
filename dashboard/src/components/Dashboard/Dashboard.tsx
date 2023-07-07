import EmployeeTable from "../EmployeeTable/EmployeeTable";
import { MetricCards } from "../MetricCards/MetricCards";
import { TaskTable } from "../TaskTable/TaskTable";

const Dashboard = ({ tasks, openModal }: any) => {
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-gray-800 rounded text-white transition-opacity duration-300 hover:opacity-75"
      >
        Add Tasks
      </button>

      <MetricCards />
      <TaskTable tasks={tasks} />
      <EmployeeTable />
    </div>
  );
};

export default Dashboard;
