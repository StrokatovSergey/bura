import React, { Component } from 'react';


import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAdd from '../ItemAdd/ItemAdd';

import './App.css';


class App extends Component {
        idGen = 100;
        state = {
            todoData: [
                this.createTodoItem('become react junior'),
                this.createTodoItem('become react middle'),
                this.createTodoItem('become react senior')
            ],
            term : ''
        }
        createTodoItem(label){
            return {
                taskName: label, 
                done: false, 
                importantForItem: false, 
                id: ++this.idGen
            }
        }
        deleteItem = (ItemIdDelete) => {
            this.setState((state)=>{
                const idX = state.todoData.findIndex((el) => el.id === ItemIdDelete);
                const newArr = [...state.todoData.slice(0, idX), ...state.todoData.slice(idX + 1)];
                return {
                    todoData: newArr
                }
            })
        }
        addOneTask = (text) => {
            const newItem = this.createTodoItem(text);
            this.setState((state)=>{
                const newArr = [...state.todoData, newItem];
                return {
                    todoData: newArr
                }
            })   
        }
        onToggleImportant = (idTaskImportant) => {
            const ItemIndex = this.state.todoData.findIndex((el)=>el.id === idTaskImportant);
            let newItem = this.state.todoData[ItemIndex];
            newItem = { ...newItem, importantForItem: !newItem.importantForItem};
            const newArr = [...this.state.todoData.slice(0, ItemIndex),newItem, 
                ...this.state.todoData.slice(ItemIndex + 1)];
            this.setState({
                todoData: newArr
            })
            
        }

        onToggleDone = (idDoneTask) =>{
            this.setState((state)=>{
                const IdItem = state.todoData.findIndex((el) => el.id === idDoneTask);
                const oldItem = state.todoData[IdItem];
                const newItem = {...oldItem, done: !oldItem.done};
                const newArr = [...state.todoData.slice(0, IdItem), newItem, ...state.todoData.slice(IdItem + 1)];
                return{
                    todoData: newArr
                }
            })
        }
        searchTask(arrItems, searchText){
            if (searchText.length === 0) {
                return arrItems;
            }
            return arrItems.filter((item)=>{
                return item.taskName.toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1
            })
        }
    
    render() {
        const {todoData, term} = this.state;
        const visibleItems = this.searchTask(todoData, term);

            const countTotalItems = todoData.filter((el)=>!el.done).length;
            const countDoneItems = todoData.filter((el)=>el.done).length;
            const countImportantItems = todoData.filter((el)=>el.importantForItem && !el.done).length;
        return (
            <div className="todo-app">
                <AppHeader todo={countTotalItems} done={countDoneItems} important={countImportantItems} />
                <div className="top-panel d-flex">
                    <SearchPanel 
                    searchInput={(term)=>{this.setState({term})}}
                    searchTask={this.searchTask}/>
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todoDataFromApp={visibleItems}
                    whichTaskDelete={this.deleteItem}
                    whichTaskImportant={this.onToggleImportant}
                    whichTaskDone={this.onToggleDone}
                />
                <ItemAdd whichTaskAdd={this.addOneTask}/>
            </div>
        )
    }

}
export default App;    