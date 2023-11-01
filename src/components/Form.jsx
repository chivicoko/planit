// supabase googlecalendar project password = zKRYoUOb3K3POdrU
// client ID = 337594554354-rl0h2irnbsp2m2hpn38fuudn9nceu0li.apps.googleusercontent.com
// client secret = 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

import styles from '../style.module.css';
// import { v4 as uuidv4 } from 'uuid';
import { useGlobContext } from '../context';
import Items from './Items';

const Form = () => {
    const {handleChange, handleSubmit, todo} = useGlobContext();

  return (
    <div className={styles.todoform}>
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput} value={todo} onChange={handleChange} type="text" placeholder='Add ToDo Item' />
                <button className={styles.todobutton} type='submit'>Add Activity</button>
            </form>
            <Items/>
        </div>
    </div>
  )
}

export default Form;