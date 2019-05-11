export default function If(props) {
  if (props.then && props.chilhdren)
    console.error(`Do not use attribute "then" and "children" together`);

  if (props.condition === true) {
    if (props.then)
      return props.then
    if (props.children)
      return props.children
  } else {
    if (props.else)
      return props.else
  }

  return null;
}