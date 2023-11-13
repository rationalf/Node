import { Handle, Position, useStore } from 'reactflow';
import { AiFillCode } from "react-icons/ai";
const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ id }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  const label = id;
  const title = 'Node Title';
  const subtitle = 'Node Subtitle';

  return (
    <div className="customNode">
      <div
        className="customNodeBody"
        style={{
          borderStyle: isTarget ? 'dashed' : 'solid',
          backgroundColor: isTarget ? '#ffcce3' : '#ffffff00',
        }}
      >
        <div style={{ display: "flex", alignItems: 'center', marginBottom: '8px' }}>
          <AiFillCode style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          <div>
            <div style={{ fontWeight: 'bold' }}>{title}</div>
            <div style={{ fontSize: '0.8em', color: '#555' }}>{subtitle}</div>
          </div>
        </div>

        {!isConnecting && (
          <Handle className="customHandle" position={Position.le} type="source" />
        )}

        <Handle 
          className="customHandle"
          position={Position.Left}
          type="target"
          isConnectableStart={false}
        />
      </div>
    </div>
  );
}
