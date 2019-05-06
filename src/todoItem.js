import React, {Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        this.props.delete(this.props.index)
    }
    render(){
        return(
            <div onClick={this.handleDelete} className="itemlist">
                {this.props.content}
            </div>
        )
    }
}

export default TodoItem