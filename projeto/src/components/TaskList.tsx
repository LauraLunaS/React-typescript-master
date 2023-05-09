
import { ITask } from "../interfaces/Taks";

import styles from './TaskList.module.css'

interface Props {
    taskList: ITask[];
    handleDelete(title: string): void;
    handleEdit(task: ITask): void;
}

const TaskList = ({ taskList,  handleDelete, handleEdit }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.deatils}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                    <div className={styles.actions}>
                        <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
                        <i 
                        className="bi bi-trash"
                        onClick={() => handleDelete(task.title)}
                        ></i>
                    </div>
                    </div>
                ))
            ) : (
                <p>Não há tarefas cadastradas!</p>
            )}
        </>
    )
}

export default TaskList;