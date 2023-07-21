function MyButton({ text, color }) {
  const style = {
    backgroundColor: color,
  };
  return <button style={style}>{text}</button>;
}

export default MyButton;
