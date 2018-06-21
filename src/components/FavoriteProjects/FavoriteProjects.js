import { h } from 'preact';

import groupBy from 'lodash/groupBy';

import projects from '%/utils/projects';

const FavoriteProjects = () => {
  const categories = groupBy(projects, 'language');
  return (
    <table>
      {Object.entries(categories).map(([categoryName, categoryProjects]) => [
        <thead key="head">
          <th>{categoryName}</th>
        </thead>,
        <tbody key="body">
          {categoryProjects.map(project => (
            <tr key={project.name}>
              <td>{project.name}</td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      ])}
    </table>
  );
};

export default FavoriteProjects;
