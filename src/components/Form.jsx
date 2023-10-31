// supabase googlecalendar project password = zKRYoUOb3K3POdrU
// client ID = 337594554354-rl0h2irnbsp2m2hpn38fuudn9nceu0li.apps.googleusercontent.com
// client secret = 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

import React, { useEffect, useState } from 'react';
import styles from '../style.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useGlobContext } from '../context';

const Form = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('lstodoList')) || []);
    const context = useGlobContext();
    // console.log(context);

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

    const handleDone = (index) => {
        const updatedItems = [...todoList];
        updatedItems.splice(index, 1);
        setTodoList(updatedItems);
    }
    // console.log(todoList);

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
                                <button className={styles.btnDone} onClick={() => handleDone(index)}>Done</button>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Form;