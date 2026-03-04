import { useEffect, useState } from "react";


// 子组件
const Child = (props: { name: string }) => {
  useEffect(() => {
    console.log('Child useEffect');
    // 返回一个清理函数
    return () => {
      console.log('unmount', props.name)
    }
  }, [props.name]);

  return <div>Child Component: {props.name}</div>;
}

export const EffectDemo: React.FC = () => {

  const [name, setName] = useState('');
  const [show, setShow] = useState(true);


  useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <div id='data'>
      <div>
        <h3>父组件</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setShow(!show)}>显示/隐藏</button>
      </div>
      <hr />
      <h3>子组件</h3>
      {show && <Child name={name} />}
    </div>
  )
}
