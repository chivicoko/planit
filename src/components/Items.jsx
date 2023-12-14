import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

import styles from '../style.module.css';
import { useGlobContext } from '../context';
import Time from './Time';
import { useState } from 'react';

// ... (your imports)

const Items = () => {
    const { handleDone, openIndex, handleOpen, handleCancelItem, getCancelLabel, crossTodo, todoList, display1, pad, openTimeSection, display2, time } = useGlobContext();


    return (
        <div>
            {todoList.map((todoItem, index) => (
                <div key={todoItem.id} className={`${styles.todoItemContainer} ${todoItem.canceled ? styles.canceled : ''}`} style={{ border: display1, paddingInline: pad }}>
                    <div className={styles.todoitem}>
                        <h3 className={`${crossTodo} ${todoItem.canceled ? styles.canceled : ''}`}>{todoItem.name}</h3>
                        <div className={styles.dropdown}>
                            <button className={styles.btnDone} onClick={() => handleOpen(index)}><FontAwesomeIcon icon={faEllipsis} /></button>

                            {openIndex === index && (
                                <ul className={styles.menu}>
                                    <li id={styles.first_item} className={styles.menu_item}>
                                        <button onClick={() => openTimeSection(todoItem.id)}><FontAwesomeIcon icon={faClock} /> {time}</button>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <button onClick={() => handleCancelItem(index)}><FontAwesomeIcon icon={faCancel} />  {getCancelLabel(index)}</button>
                                    </li>
                                    <li id={styles.last_item} className={styles.menu_item}>
                                        <button onClick={() => handleDone(index)}><FontAwesomeIcon icon={faTrashCan} /> Remove</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <div style={{ display: display2 }}>
                {/* Include your Time component here */}
                <Time />
            </div>
        </div>
    );
};

export default Items;
