import React from 'react';
import styles from '../style.module.css';
import { useGlobContext } from '../context';

const Items = () => {
    const {handleDone, todoList} = useGlobContext();

  return (
    <div>
        
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
  )
}

export default Items;