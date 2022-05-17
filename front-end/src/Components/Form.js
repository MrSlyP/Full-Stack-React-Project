import React from "react";

function Form() {
    return (
        <form>
            <div class="mb-3">
                <h1>TO DO LIST</h1>
                <input type="text" class="form-control" placeholder="Enter task"/>
                <div>
                <button class="btn btn-primary mx-3" type="submit">Add</button>
                <button class="btn btn-primary mx-3" type="submit">Modify</button>
                <button class="btn btn-primary mx-3" type="submit">Delete</button>
                </div>
            </div>
        </form>
    );
}

export default Form;