import React, { useEffect, useState } from 'react';
import styles from '../style.module.css';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('lstodoList')) || []);

    useEffect(() => {
        localStorage.setItem('lstodoList', JSON.stringify(todoList));
    }, [todoList]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, {id:crypto.randomUUID(), name:todo}]);
        setTodo('');
    }
    // console.log(todoList);

    // const handleDone = (e) => {
    //     let todoList2 = todoList.filter((item) => item.id !== e.target.value.id);
    //     console.log(todoList2);
    // }

  return (
    <div className={styles.todoform}>
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput} value={todo} onChange={handleChange} type="text" placeholder='Add ToDo Item' />
                <button className={styles.todobutton} type='submit'>Add Activity</button>
            </form>
                {
                    todoList.map((todoItem, index) => {
                        return (
                            <div key={todoItem.id} className={styles.todoitem}>
                                <h3>{todoItem.name}</h3>
                                <button className={styles.btnDone} onClick={handleDone}>Done</button>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Form;