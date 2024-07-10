import { useMemo, useState } from 'react';
import { Button, ColorPicker } from 'antd';
const Demo = () => {
  const [color, setColor] = useState('#1677ff');
  const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);
  const btnStyle = {
    backgroundColor: bgColor,
  };
  return (
    <ColorPicker value={color} onChange={setColor}>
      <Button type="primary" style={btnStyle}>
        open
      </Button>
    </ColorPicker>
  );
};
export default Demo;