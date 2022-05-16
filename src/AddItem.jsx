const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*  we need not mention event in case of onSubmit it is implicitly passed.*/}
            <label htmlFor={'addItem'}>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type={'text'}
                placeholder={"Add item"}
                required
                /*
                 * we need to apply onChange to change value,
                 * otherwise it won't be changed
                 */
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button
                type={"submit"}
                aria-label={'Add Item'}
            > +
            </button>

        </form>
    );

}

export default AddItem;
