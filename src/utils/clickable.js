const detectTab = fn => event => {
  if (event.keyCode !== 13 && event.keyCode !== 32) {
    return;
  }
  event.preventDefault();
  return fn(event);
};

export const onClick = fn => ({
  onClick: fn,
  onKeyPress: detectTab(fn)
});

export const onChange = fn => ({
  onChange: fn,
  onKeyPress: detectTab(fn)
});
