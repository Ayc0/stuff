import { h } from 'preact';
import styled from 'preact-emotion';

import Row from '%/components/Row';
import Source from '%/components/Source';
import { getColor } from '%/utils/languages';

import Description from './Description';

const Tile = styled(Row)(
  {
    margin: '1em 0',
    padding: '.5em 0 .5em 1em'
  },
  ({ language }) => ({
    boxShadow: `inset ${getColor(language)} 0.4em 0px 0 0px`
  })
);

const Project = ({ project }) => (
  <Tile column language={project.language}>
    <Row top fluid>
      <h3 style={{ margin: 0, flex: 1 }}>{project.name}</h3>
      {Object.entries(project.sources).map(([type, link]) => (
        <Source key={type} type={type} link={link} size="1.5em" style={{ marginLeft: '.5em' }} />
      ))}
    </Row>
    <Row fluid clickable>
      <Description style={{ width: '60%' }}>{project.description}</Description>
    </Row>
  </Tile>
);

export default Project;
