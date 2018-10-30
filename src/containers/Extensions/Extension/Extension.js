import { h } from 'preact';

import Row from '%/components/Row';
import Source from '%/components/Source';
import Description from '%/components/Description';

const Extension = ({ extension, lazy }) => {
  const imgProps = { alt: extension.name, style: { maxHeight: '3em', maxWidth: '100%' } };
  if (lazy) {
    imgProps['lazy-src'] = extension.icon;
  }
  else {
    imgProps.src = extension.icon;
  }
  return (
    <Row top left fluid style={{ marginBottom: '.6em' }}>
      <Row right style={{ width: '3em', marginTop: '1.2em', marginRight: '1em' }}>
        <img {...imgProps} />
      </Row>
      <Row column style={{ width: 'calc(100% - 5em)' }}>
        <Row middle fluid>
          <h3
            style={{
              marginTop: '.5em',
              marginBottom: '.4em',
              flex: 1,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {extension.name}
          </h3>
          {Object.entries(extension.sources).map(([type, link]) => (
            <Source key={type} type={type} link={link} size="1.5em" style={{ marginLeft: '.5em' }} />
          ))}
        </Row>
        <Row fluid>
          <Description>{extension.description}</Description>
        </Row>
      </Row>
    </Row>
  );
};

export default Extension;
