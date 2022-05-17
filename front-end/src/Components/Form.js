import React from "react";

function Form() {
    return (
            <div class="card bg-dark border-primary text-white">
            <div class="card-body">
            <h5 class="card-title">TO DO LIST</h5>
                <input type="text" class="form-control my-3" placeholder="Enter task"/>
                <button class="btn btn-primary mx-3" type="submit">Add</button>
                <button class="btn btn-primary mx-3" type="submit">Modify</button>
                <button class="btn btn-primary mx-3" type="submit">Delete</button>
         </div>
        </div>

    );
}

export default Form;