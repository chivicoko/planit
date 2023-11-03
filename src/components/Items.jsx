import React, { useState } from 'react';
import styles from '../style.module.css';
import { useGlobContext } from '../context';
import Time from './Time';

const Items = () => {
    const {handleDone, todoList, display1, pad, openTimeSection, display2} = useGlobContext();

  return (
    <div>  
        {
            todoList.map((todoItem, index) => {
                return (
                    <div key={todoItem.id} className={styles.todoItemContainer} style={{border: display1, paddingInline: pad}}>
                        <div className={styles.todoitem}>
                            <h3>{todoItem.name}</h3>
                            <div className="btns">
                                <button className={styles.btnDone} onClick={() => openTimeSection()}>Set Time</button>
                                <button className={styles.btnDone} onClick={() => handleDone(index)}>Done</button>
                            </div>
                        </div>
                        <div style={{display: display2}}>
                            <Time/>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Items;