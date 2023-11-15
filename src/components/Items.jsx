import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCancel } from '@fortawesome/free-solid-svg-icons'

import styles from '../style.module.css';
import { useGlobContext } from '../context';
import Time from './Time';

const Items = () => {
    const {handleDone, handleCancel, cancel, crossTodo, todoList, display1, pad, openTimeSection, display2, time} = useGlobContext();

  return (
    <div>  
        {
            todoList.map((todoItem, index) => {
                return (
                    <div key={todoItem.id} className={styles.todoItemContainer} style={{border: display1, paddingInline: pad}}>
                        <div className={styles.todoitem}>
                            <h3 className={crossTodo}>{todoItem.name}</h3>
                            <div className="btns">
                                <button className={styles.btnDone} onClick={() => openTimeSection(todoItem.id)}><FontAwesomeIcon icon={faClock} /> {time}</button>
                                <button className={`${styles.btnDone} ${''}`} onClick={() => handleCancel(index)}><FontAwesomeIcon icon={faCancel} /> {cancel}</button>
                                <button className={styles.btnDone} onClick={() => handleDone(index)}><FontAwesomeIcon icon={faTrashCan} /> Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div style={{display: display2}}>
            <Time/>
        </div>
    </div>
  )
}

export default Items;