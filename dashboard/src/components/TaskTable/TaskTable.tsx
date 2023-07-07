export const TaskTable = ({ tasks }: any) => {
  return (
    <div>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </div>
  );
};
