import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projectState,
  onSelectProject,
  selectedProjectId,
}) => {
  //   function handleClick() {}
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectState.map((i) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (i.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += "text-stone-400";
          }

          return (
            <li key={Math.random() + i.title}>
              <button onClick={()=>onSelectProject(i.id)} className={cssClasses}>
                {i.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
