import { Label } from "./styles";

export function Labels(props){
  return(
    <Label
    err={props.err}>
      {props.title}
    </Label>
  );
}