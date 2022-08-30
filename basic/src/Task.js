export const Task = (props) => {
    return (
        <div className='task'>
          <h1>{props.taskName}</h1>
          <button onClick={() => props.delTask(props.id)}> X </button>
        </div>
      )
}