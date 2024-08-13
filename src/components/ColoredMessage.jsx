export const ColoredMessage = (props) => {
  // const { children, marginTop, color } = props;

  const style = {
    marginTop: props.marginTop,
    color: props.color,
    // color,
    fontSize: 24
    // 単位を指定しない場合は、px になる。
    // fontSize: '24px'
  };


  return <p style={style}>{props.children}</p>;
};
