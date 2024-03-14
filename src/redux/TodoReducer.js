const defaultState = {
    todo: [] 
}
export function todoReducer(state = defaultState, actions) {
        if (actions.type == "TODO_ADD") {
            let copied = JSON.parse(JSON.stringify(state.todo));
            copied.push(actions.payload)
            return {...state, todo: copied}
        } else if (actions.type == "TODO_REMOVE") {
            let copied = JSON.parse(JSON.stringify(state.todo));
            copied = copied.filter(el => {
                return el.id != actions.payload.id
            })
            return {...state, todo: copied}
        } else {
            return state;
        }
            
}

