import React from "react";

function Task({task}) {
    const isOpen = task.status === "open";

    return(
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{task.title}</h5>
                    <h6 className="card-subtitle text-muted">{task.description}</h6>
                </div>

                <div>
                    {/* Przycisk "Add operation" i "Finish" widoczne tylko jeśli status zadania jest "open" */}
                    {isOpen && (
                        <>
                            <button className="btn btn-info btn-sm mr-2">
                                Add operation
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>

                            <button className="btn btn-dark btn-sm">
                                Finish
                                <i className="fas fa-archive ml-1"></i>
                            </button>
                        </>
                    )}

                    {/* Przycisk usuwania widoczny tylko jeśli nie ma żadnych operacji w zadaniu */}
                    {task && task.operations && task.operations.length === 0 && (
                        <button className="btn btn-outline-danger btn-sm ml-2">
                            <i className="fas fa-trash"></i>
                        </button>
                    )}
                </div>
            </div>

            {/* Komponent Operations - możesz wstawić go tutaj */}
        </section>
    )
}

export default Task;