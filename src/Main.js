function Main({items, remove}){

    function removeitem(itemDelet){
        remove(itemDelet);
    }

    return(
        <section className="main">
            <input className="toggle-all"
                   type="checkbox"/>
            <ul className="todo-list">
                {/* map each item in the arry items to a line in the list.*/}
                {items.map(item => (
                    <li>
                        <div className="view">
                            <input className="toggle"
                                   type="checkbox"/>
                            <label>{item.title}</label>
                            <button onClick={()=> removeitem(item)} className="destroy"/>
                        </div>
                        <input className="edit"/>
                    </li>
                ))}

            </ul>
        </section>
    )
}

export default Main;