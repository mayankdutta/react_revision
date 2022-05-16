const AddItem = () => {
    return (
        <form>
            <label htmlFor={'addItem'}>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type={'text'}
                placeholder={"Add item"}
                required
            />
            <button
                type={"submit"}
                aria-label={'Add Item'}
            > Submit
            </button>

        </form>
    );

}

export default AddItem;