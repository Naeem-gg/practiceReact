export default function todoItem(props) {
    return (
        <div
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <li>{props.text}</li>
        </div>
      );
}
