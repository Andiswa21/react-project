import React from 'react'
import { connect } from 'react-redux'

export const ItemList = ({items, onDeleteItem, onToggleItem}) => {
  return (
    <ul>
        {items.map(item => (
            <li key={item.id}>
                <input type="checkbox"
                 checked = {item.complete}
                 onChange={() => onToggleItem(item.id)} />
                 <span style={{textDecoration :item.complete ? 'line-through' : 'none'}}>
                    {item.text}
                 </span>
                 <button onClick={() => onDeleteItem(item.id)}> DELETE</button>
            </li>
        ))}

    </ul>
  );
};

const mapStateToProps = state => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = dispatch =>{
    return {
        onDeleteItem: id => dispatch({type: 'DELETE_ITEM', id}),
        onToggleItem: id => dispatch({type: 'TOGGLE_ITEM', id})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
