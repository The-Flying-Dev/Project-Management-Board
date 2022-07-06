import styled from 'style-components';
import Task from '../Task/Task'
//import './Lane.css';

const LaneWrapper = styled.div`
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
`;

function Lane({ laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) {
  return (
    <LaneWrapper>
      <Title>{title}</Title>
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
    </LaneWrapper>
  );
}

export default Lane;
