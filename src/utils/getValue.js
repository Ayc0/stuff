const getValue = fn => event => fn(event.target.value, event);

export default getValue;
