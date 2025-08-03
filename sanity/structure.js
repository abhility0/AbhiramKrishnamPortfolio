// structure.js

export const structure = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.documentTypeListItem('pageInfo').title('Page Info'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('social').title('Social Links'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['pageInfo', 'experience', 'skill', 'project', 'social'].includes(item.getId()),
      ),
    ])
