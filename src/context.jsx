import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    // const [display1, setDisplay1] = useState('none');
    const [display2, setDisplay2] = useState('none');
    // const [pad, setPad] = useState('0');
    const [time, setTime] = useState("Time");

    // todo section
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

    const handleDone = (index) => {
        const updatedItems = [...todoList];
        updatedItems.splice(index, 1);
        setTodoList(updatedItems);
    }

    // display
    const openTimeSection = (itemId) => {
        // for (let index = itemId; ; ) {
            // const element = array[index];
            
            display2 !== 'block' ? setDisplay2('block') : setDisplay2('none');
            // display1 !== '1px solid #666' ? setDisplay1('1px solid #666') : setDisplay1('none');
            // pad !== '20px' ? setPad('20px') : setPad('0');
            // console.log(index);
        // }
    }

    // date time section
    

    return <AppContext.Provider value={{handleChange, handleSubmit, handleDone, todo, todoList, setTodo, setTodoList, display2, time, setTime, openTimeSection }}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};