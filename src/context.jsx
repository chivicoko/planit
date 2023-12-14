import React, {useContext, useEffect, useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [display2, setDisplay2] = useState('none');
    const [time, setTime] = useState("Set Time");
    const [openIndex, setOpenIndex] = useState(null);

    // todo section
    const [todo, setTodo] = useState("");
    // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('lstodoList')) || []);
    const [todoList, setTodoList] = useState(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('lstodoList')) || [];
        return storedTodoList;
    });

    useEffect(() => {
        localStorage.setItem('lstodoList', JSON.stringify(todoList));
    }, [todoList]);

    const handleChange = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (todo.trim().length !== 0 && todo.trim().length !== 1 && todo.trim().length !== 2) {
            setTodoList([...todoList, {id:crypto.randomUUID(), name:todo}]);
            toast(`Success! "${todo}" has been added to the list)`);
        } else {
            toast(`Invalid input. ("${todo}" is too short)`);
        }

        setTodo('');
    }

    const handleDone = index => {
        const updatedItems = [...todoList];
        updatedItems.splice(index, 1);
        setTodoList(updatedItems);
    }
    
    const handleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleCancelItem = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].canceled = !updatedTodoList[index].canceled;

        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));

        setTodoList(updatedTodoList);
    };

    const getCancelLabel = (index) => {
        return todoList[index].canceled ? 'Restore' : 'Cancel';
    };


    const openTimeSection = itemId => {
        display2 !== 'block' ? setDisplay2('block') : setDisplay2('none');
    }
    

    return <AppContext.Provider value={{handleChange, getCancelLabel, openIndex, handleCancelItem, handleOpen, handleSubmit, handleDone, todo, todoList, setTodo, setTodoList, display2, time, setTime, openTimeSection }}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};