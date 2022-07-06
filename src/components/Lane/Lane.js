import Task from '../Task/Task'
import './Lane.css';

function Lane({ laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) {
  return (
    <div className='Lane-wrapper'>
      <h2>{title}</h2>
      {loading || error ? ( 
        <span>{error || 'loading...'}</span>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, laneId)}
          />
        ))      
      )}
    </div>
  );
}

export default Lane;
