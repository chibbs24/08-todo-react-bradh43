(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,o){e.exports=o(27)},,,,,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(8),s=o.n(r),c=o(9),d=o(2),i=o(3),l=o(5),u=o(4),m=o(6),p=o(1),h=(o(15),o(17),function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).addButtonClick=function(){o.addTodoItem(o.refs.newTodoInput.value)},o.enterKeyPress=function(e){13===e.keyCode&&o.addTodoItem(e.target.value)},o.state={addTodo:e.addTodo},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"addTodoItem",value:function(e){this.refs.newTodoInput.value="",this.state.addTodo(e)}},{key:"render",value:function(){return n.a.createElement("div",{className:"addItem"},n.a.createElement("div",{onClick:this.addButtonClick,id:"addIcon"}),n.a.createElement("div",{className:"newTodo"},n.a.createElement("input",{onKeyDown:this.enterKeyPress,placeholder:"New To-Do",id:"addTodoInput",ref:"newTodoInput"})),n.a.createElement("hr",null))}}]),t}(a.Component)),v=(o(19),function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={removeCompleted:e.removeCompleted},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"remove-completed"},n.a.createElement("button",{onClick:this.state.removeCompleted,type:"submit",id:"removeCompletedButton"},n.a.createElement("div",{className:"remove-button"},n.a.createElement("div",{id:"removeCompletetedIcon"}),"Remove Completed")))}}]),t}(a.Component)),f=(o(21),function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={removeAll:e.removeAll},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"remove-all"},n.a.createElement("button",{onClick:this.props.removeAll,type:"submit",id:"removeAllButton"},n.a.createElement("div",{className:"remove-button"},n.a.createElement("div",{id:"removeAllIcon"}),"Remove All")))}}]),t}(a.Component)),b=(o(23),function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).resortTodos=function(e){var t=e.target.value;o.setState({currentSort:t}),"completed"===t?o.state.sortByCompleted():o.state.sortByDate()},o.state={currentSort:"date",sortByDate:e.sortByDate,sortByCompleted:e.sortByCompleted},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"sortTodo"},n.a.createElement("h2",null,"Sort By:"),n.a.createElement("select",{value:this.state.currentSort,onChange:this.resortTodos},n.a.createElement("option",{value:"date"},"Date"),n.a.createElement("option",{value:"completed"},"Completed")))}}]),t}(a.Component)),y=(o(25),function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).completeTodo=function(){o.setState(function(e){return{completed:!e.completed}}),o.checkTodo(),o.state.updateCompleteTodo(o.state.id,!o.state.completed)},o.state={id:e.id,text:e.text,completed:e.completed,deleteTodo:e.deleteTodo,updateCompleteTodo:e.updateCompleteTodo},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.state.completed&&this.checkTodo()}},{key:"checkTodo",value:function(){this.refs.checkIcon.classList.toggle("check"),this.refs.title.classList.toggle("strikeText")}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:this.state.id,className:"todoItem"},n.a.createElement("div",{ref:"checkIcon",id:"checkIcon",onClick:this.completeTodo}),n.a.createElement("div",{ref:"title",className:"todo-title"},n.a.createElement("h2",null,this.state.text)),n.a.createElement("div",{id:"removeIcon",onClick:function(){return e.state.deleteTodo(e.state.id)}}),n.a.createElement("hr",null))}}]),t}(a.Component)),T=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={apiKey:"f1d8c98bb90164800f4d8bc7e8f945f1b1960695710dfc94396b9d3a97b08ff8",todos:[]},e.removeAll=e.removeAll.bind(Object(p.a)(Object(p.a)(e))),e.removeCompleted=e.removeCompleted.bind(Object(p.a)(Object(p.a)(e))),e.deleteTodo=e.deleteTodo.bind(Object(p.a)(Object(p.a)(e))),e.addTodo=e.addTodo.bind(Object(p.a)(Object(p.a)(e))),e.updateCompleteTodo=e.updateCompleteTodo.bind(Object(p.a)(Object(p.a)(e))),e.sortByCompleted=e.sortByCompleted.bind(Object(p.a)(Object(p.a)(e))),e.sortByDate=e.sortByDate.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getTodos().then(function(t){return e.setState(function(e){return{todos:t}}),e.sortByDate(),!0}).catch(function(e){return console.log("Error fetching todos:"+e)})}},{key:"sortByDate",value:function(){for(var e=this.state.todos,t=e.length,o=e.length,a=0;a<e.length;a++){t=a;for(var n=a+1;n<e.length;n++)e[n].created<e[t].created&&(t=n);o=e[a],e[a]=e[t],e[t]=o}console.log(e),this.setState({todos:e})}},{key:"sortByCompleted",value:function(){var e=[],t=[];this.state.todos.forEach(function(o){o.completed?e.push(o):t.push(o)}),this.setState({todos:e.concat(t)})}},{key:"getTodos",value:function(e,t){var o=this;return new Promise(function(e,t){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===this.readyState&&200===this.status?e(JSON.parse(this.responseText)):4===this.readyState&&(console.log("Server Error"),t("Error"))},a.open("GET","https://api.kraigh.net/todos",!0),a.setRequestHeader("x-api-key",o.state.apiKey),a.send()})}},{key:"updateCompleteTodo",value:function(e,t){var o=[];this.state.todos.forEach(function(a){a.id===e&&(a.completed=t),o.push(a)}),this.setState({todos:o});var a={completed:t},n=new XMLHttpRequest;n.open("PUT","https://api.kraigh.net/todos/"+e,!0),n.setRequestHeader("Content-type","application/json"),n.setRequestHeader("x-api-key",this.state.apiKey),n.send(JSON.stringify(a))}},{key:"addTodo",value:function(e){var t=this;this.generateNewTodo(e).then(function(e){return t.setState(function(o){return{todos:Object(c.a)(t.state.todos).concat([e])}}),!0}).catch(function(e){return console.log("Error fetching todos:"+e)})}},{key:"generateNewTodo",value:function(e){var t=this;return new Promise(function(o,a){var n={text:e},r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText);o(e)}else 4===this.readyState&&(console.log("Server Error"),a("Error"))},r.open("POST","https://api.kraigh.net/todos",!0),r.setRequestHeader("Content-type","application/json"),r.setRequestHeader("x-api-key",t.state.apiKey),r.send(JSON.stringify(n))})}},{key:"removeTodo",value:function(e){var t=new XMLHttpRequest;t.open("DELETE","https://api.kraigh.net/todos/"+e,!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key",this.state.apiKey),t.send()}},{key:"deleteTodo",value:function(e){var t=[];this.state.todos.forEach(function(o){o.id===e?this.removeTodo(o.id):t.push(o)},this),this.setState({todos:t})}},{key:"removeAll",value:function(){var e=this;this.setState({todos:[]}),this.state.todos.map(function(t){return e.removeTodo(t.id)})}},{key:"removeCompleted",value:function(){var e=[];this.state.todos.forEach(function(t){t.completed?this.removeTodo(t.id):e.push(t)},this),this.setState({todos:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"checklist"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{id:"todoIcon"}),n.a.createElement("div",{className:"header-title"},n.a.createElement("h1",null,"To-Do  List")),n.a.createElement(b,{sortByDate:this.sortByDate,sortByCompleted:this.sortByCompleted}),n.a.createElement("hr",null)),n.a.createElement("div",{className:"items",id:"items"},n.a.createElement("div",{id:"todoItems"},this.state.todos.map(function(t){return n.a.createElement(y,{key:t.id,id:t.id,text:t.text,completed:t.completed,deleteTodo:e.deleteTodo,updateCompleteTodo:e.updateCompleteTodo})})),n.a.createElement(h,{addTodo:this.addTodo})),n.a.createElement("div",{className:"footer"},n.a.createElement(v,{removeCompleted:this.removeCompleted}),n.a.createElement(f,{removeAll:this.removeAll})))}}]),t}(a.Component);s.a.render(n.a.createElement(T,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.fbf4d227.chunk.js.map