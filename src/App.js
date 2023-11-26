import './App.css';
import { store } from './redux/store';
import Header from './components/Header';
import {connect} from 'react-redux'
import TodoItems from './components/TodoItems';
import { useRef } from 'react';
import Footer from './components/Footer';

function App(props) {
  const headerRef = useRef()

  const requestEdit = (id) => {
    headerRef.current.changeUpdate(id)
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <Header
        ref={headerRef}
      />
      <TodoItems
        requestEdit={requestEdit}
      />
      <Footer/>
    </div>
  );
}

function mapStateToProps (state){
  return ({
    todoList: store.getState().todoList,
  })
}

export default connect(mapStateToProps)(App);
