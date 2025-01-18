import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { slaesType } from './salesType'
import { productType } from './productType'
import { orderType } from './orderType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType,slaesType,productType,orderType],
}
