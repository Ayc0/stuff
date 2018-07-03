import { h } from 'preact';
import styled from 'preact-emotion';

import Row from '%/components/Row';
import Tag from '%/components/Tag';
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

const TagWrapper = styled(Row)`
  @media (max-width: 500px) {
    order: 1;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 0.5em;
  }
`;

const Project = ({ project }) => (
  <Tile column language={project.language}>
    <Row top fluid wrap>
      <h3 style={{ margin: 0, flexGrow: 1 }}>{project.name}</h3>
      <TagWrapper>{project.keywords.map(keyword => <Tag color="accent">{keyword}</Tag>)}</TagWrapper>
      {Object.entries(project.sources).map(([type, link]) => (
        <Source key={type} type={type} link={link} size="1.5em" style={{ marginLeft: '.5em' }} />
      ))}
    </Row>
    <Row fluid>
      <Description clickable style={{ maxWidth: '30em' }}>
        {project.description}
      </Description>
    </Row>
  </Tile>
);

export default Project;
