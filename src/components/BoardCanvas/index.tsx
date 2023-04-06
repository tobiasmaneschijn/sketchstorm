import React, { useRef } from 'react';
import { BoardData } from '../../types/whiteboard';
import { useSession } from 'next-auth/react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// props : 
// board data
interface BoardCanvasProps {
    boardId: string;
}


const BoardCanvas = ({boardId} : BoardCanvasProps ) => {

    
    const {data, status} =  useSession();
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    

    if(status === 'loading') {
        return <div>Loading...</div>
    }

    if(status === 'unauthenticated') {
        return <div>Unauthenticated</div>
    }
    

return (
    <TransformWrapper>
      <TransformComponent>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
          <div style={{ position: 'absolute', top: 0, left: 0 }}>
            {<div>Toby</div>}
          </div>
        </div>
      </TransformComponent>
    </TransformWrapper>
);
}


export default BoardCanvas;