import { type SchemaTypeDefinition } from 'sanity'

import { experience } from "./Experience"
import { skill } from './skill'
import { pageInfo } from './pageInfo'
import { project } from './project'
import { social } from './social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience,skill,project,social, pageInfo],
}
