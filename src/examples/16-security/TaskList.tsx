// TaskList.tsx
import { useEffect, useState } from 'react';
interface Task {
    id: number;
    name: string;
  }
  
  function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]); // Especifica el tipo de las tareas como Task[]
  
    useEffect(() => {
      // Realizar una solicitud al backend para obtener las tareas
      fetch('/api/tasks')
        .then((response) => response.json())
        .then((data: Task[]) => setTasks(data)) // Asegúrate de que los datos sean de tipo Task[]
        .catch((error) => console.error('Error:', error));
    }, []);
  
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TaskList;
  
