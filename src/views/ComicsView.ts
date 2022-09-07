import { OrderBy } from '@/apis/marvel/types/comics/methods'
import type { SelectOption } from '@/components/common/Select'

export const orderByOptions: SelectOption[] = [
  {
    key: OrderBy.Desc.focDate,
    label: 'FOC Date', // Firm Order Commitment
  },
  {
    key: OrderBy.Asc.title,
    label: 'Title',
  },
  {
    key: OrderBy.Desc.modified,
    label: 'Modified',
  },
  {
    key: OrderBy.Desc.issueNumber,
    label: 'Issue Number',
  },
]
