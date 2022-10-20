import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import React from 'react';

const style: React.CSSProperties = {
  display: 'inline-block',
  height: 500,
  marginLeft: 80,
};

const marks: SliderMarks = {
  0: {
    style: {
      color: '#008cff',
    },
    label: <strong>0°C</strong>,
  },
  20: {
    style: {
      color: '#00ffae',
    },
    label: <strong>20°C</strong>,
  },
  50: {
    style: {
      color: '#ff00aa',
    },
    label: <strong>50°C</strong>,
  },
  100: {
    style: {
      color: '#ff0004',
    },
    label: <strong>100°C</strong>,
  },
};

const App: React.FC = () => (
  <>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={20} defaultValue={[30, 80]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[20, 50]} />
    </div>
  </>
);

export default App;
