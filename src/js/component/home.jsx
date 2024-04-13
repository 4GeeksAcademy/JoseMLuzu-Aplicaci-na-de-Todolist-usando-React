import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <h1 className="titulo">todos</h1>
            <div className="box">
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && inputValue.trim() !== "") {
                                setTodos([...todos, inputValue]);
                                setInputValue("");
                            }
                        }}
                        placeholder="What needs to be done?"
                        />
                </li>
                {todos.map((todo, index) => (
                    <li key={index} className="tarea">
                        <h1>{todo}
                        <i
                            className="fa fa-times icono-x"
                            onClick={() => setTodos(todos.filter((_, idx) => idx !== index))}
                            ></i>
                        </h1>
                    </li>
                ))}
            </ul>
                <div>{todos.length} items left</div>
        </div>
                </div>
    );
};

export default Home;
